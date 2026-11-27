const USERS_KEY = "cx_users";
const SESSION_KEY = "cx_session";

/* ---------- Storage helpers (demo: localStorage) ---------- */
// Real backend aaye toh sirf signIn() aur signUp() ke andar fetch() laga dena.

const getUsers = () => JSON.parse(localStorage.getItem(USERS_KEY) || "[]");

async function hashText(text) {
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
    return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, "0")).join("");
}

async function signUp({ firstName, lastName, email, password, phone, emailOpt, smsOpt }) {
    const users = getUsers();
    if (users.some(u => u.email === email.toLowerCase())) {
        throw new Error("This email is already registered.");
    }
    const user = {
        firstName, lastName, phone, emailOpt, smsOpt,
        email: email.toLowerCase(),
        passwordHash: await hashText(password)
    };
    users.push(user);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    return user;
}

async function signIn(email, password) {
    const user = getUsers().find(u => u.email === email.toLowerCase());
    if (!user || user.passwordHash !== await hashText(password)) {
        throw new Error("Invalid email or password.");
    }
    return user;
}

function setSession(user) {
    const { passwordHash, ...safeUser } = user;
    localStorage.setItem(SESSION_KEY, JSON.stringify(safeUser));
    document.dispatchEvent(new CustomEvent("cx:auth-change", { detail: safeUser }));
}

export const getSession = () => JSON.parse(localStorage.getItem(SESSION_KEY) || "null");

/* ---------- Views ---------- */

const eyeBtn = `
    <button type="button" class="cx-auth-eye" data-toggle-pass aria-label="Show password">
        <i class="fa-solid fa-eye-slash"></i>
    </button>`;

const unlockLink = `
    <p class="cx-auth-modal-link">
        Already signed up in-store?
        <button type="button" class="cx-auth-link-btn" disabled>Unlock Online Access</button>
    </p>`;

const views = {
    signin: {
        title: "Account sign in",
        html: `
            <p class="cx-auth-modal-link">
                Don’t have an account?
                <button type="button" class="cx-auth-link-btn" data-view="signup">Create an account</button>
            </p>
            ${unlockLink}

            <form id="signinForm" novalidate>
                <div class="cx-auth-form-group">
                    <label for="authEmail">Email address</label>
                    <input type="email" id="authEmail" placeholder="Email address" required>
                </div>

                <div class="cx-auth-form-group">
                    <label for="authPassword">Password</label>
                    <div class="cx-auth-password-wrapper">
                        <input type="password" id="authPassword" placeholder="Password" required>
                        ${eyeBtn}
                    </div>
                </div>

                <a href="#" class="cx-auth-forgot-password">Forgot your password?</a>

                <p class="cx-auth-msg" id="authMsg" role="alert"></p>

                <button type="submit" class="cx-auth-submit-btn">Sign in</button>
            </form>`
    },

    signup: {
        title: "Sign Up",
        html: `
            <p class="cx-auth-modal-link">
                Already have an account?
                <button type="button" class="cx-auth-link-btn" data-view="signin">Login here</button>
            </p>
            ${unlockLink}

            <form id="signupForm" novalidate>
                <div class="cx-auth-row">
                    <div class="cx-auth-form-group">
                        <label for="suFirst">First name</label>
                        <input type="text" id="suFirst" placeholder="First name" required>
                    </div>
                    <div class="cx-auth-form-group">
                        <label for="suLast">Last name</label>
                        <input type="text" id="suLast" placeholder="Last name" required>
                    </div>
                </div>

                <div class="cx-auth-row">
                    <div class="cx-auth-form-group">
                        <label for="suEmail">Email address</label>
                        <input type="email" id="suEmail" placeholder="Email address" required>
                    </div>
                    <div class="cx-auth-form-group">
                        <label for="suPass">Password</label>
                        <div class="cx-auth-password-wrapper">
                            <input type="password" id="suPass" placeholder="Password" minlength="6" required>
                            ${eyeBtn}
                        </div>
                    </div>
                </div>

                <div class="cx-auth-form-group">
                    <label for="suPhone">Contact number(optional)</label>
                    <div class="cx-auth-phone">
                        <select id="suCC" aria-label="Country code">
                            <option value="+91">IN +91</option>
                            <option value="+44">UK +44</option>
                            <option value="+1">US +1</option>
                            <option value="+971">AE +971</option>
                        </select>
                        <input type="tel" id="suPhone" placeholder="0000000000" inputmode="numeric">
                    </div>
                </div>

                <label class="cx-auth-check">
                    <input type="checkbox" id="suEmailOpt">
                    <span>Keep me up to date via email.</span>
                </label>

                <label class="cx-auth-check">
                    <input type="checkbox" id="suSmsOpt">
                    <span>Keep me up to date via SMS and Whatsapp.</span>
                </label>

                <label class="cx-auth-check">
                    <input type="checkbox" id="suTerms" required>
                    <span>I confirm that I am 13 years of age or older and I accept the
                        <a href="#">Terms &amp; Conditions</a> and <a href="#">Privacy Policy</a>.</span>
                </label>

                <p class="cx-auth-msg" id="authMsg" role="alert"></p>

                <button type="submit" class="cx-auth-submit-btn">Create account</button>
            </form>`
    }
};

/* ---------- Init ---------- */

export function initAuth() {
    const overlay = document.querySelector("#cxauthmodal");
    const body = document.querySelector("#authBody");
    const title = document.querySelector("#authTitle");
    const openBtn = document.querySelector("#openModal");
    const closeBtn = document.querySelector("#closeModal");

    if (!overlay || !body || !title || !openBtn || !closeBtn) {
        console.error("Auth modal elements nahi mile. header.html check karo:", {
            overlay: !!overlay, authBody: !!body, authTitle: !!title,
            openModal: !!openBtn, closeModal: !!closeBtn
        });
        return;
    }

    const modal = overlay.querySelector(".cx-auth-modal");

    const showView = (name, { focus = true } = {}) => {
        title.textContent = views[name].title;
        body.innerHTML = views[name].html;
        modal.classList.toggle("wide", name === "signup");
        if (focus) body.querySelector("input")?.focus();
    };

    const showMsg = (text, ok = false) => {
        const el = body.querySelector("#authMsg");
        if (!el) return;
        el.textContent = text;
        el.classList.toggle("success", ok);
    };

    const openModal = () => {
        overlay.classList.add("open");   // pehle open, taaki focus lag sake
        showView("signin");
    };
    const closeModal = () => overlay.classList.remove("open");

    // initial render (focus nahi, modal hidden hai)
    showView("signin", { focus: false });

    /* ----- open / close ----- */
    openBtn.addEventListener("click", openModal);
    closeBtn.addEventListener("click", closeModal);

    // bahar click karne par band
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) closeModal();
    });

    // Esc dabane par band
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeModal();
    });

    /* ----- view switch + password eye (event delegation) ----- */
    body.addEventListener("click", (e) => {
        const switchBtn = e.target.closest("[data-view]");
        if (switchBtn) return showView(switchBtn.dataset.view);

        const eye = e.target.closest("[data-toggle-pass]");
        if (eye) {
            const input = eye.parentElement.querySelector("input");
            const show = input.type === "password";
            input.type = show ? "text" : "password";
            eye.querySelector("i").className = show ? "fa-solid fa-eye" : "fa-solid fa-eye-slash";
            return;
        }

        // forgot password / terms links abhi kuch nahi karenge
        if (e.target.closest(".cx-auth-forgot-password, .cx-auth-check a")) e.preventDefault();
    });

    /* ----- submit ----- */
    body.addEventListener("submit", async (e) => {
        e.preventDefault();
        const form = e.target;
        const btn = form.querySelector(".cx-auth-submit-btn");
        showMsg("");

        try {
            if (form.id === "signinForm") {
                const email = form.querySelector("#authEmail").value.trim();
                const pass = form.querySelector("#authPassword").value;

                if (!email || !pass) throw new Error("Please enter email and password.");

                btn.disabled = true;
                const user = await signIn(email, pass);
                setSession(user);
                showMsg("Signed in successfully!", true);
                setTimeout(closeModal, 700);
            }

            if (form.id === "signupForm") {
                const val = (id) => form.querySelector(id).value.trim();
                const firstName = val("#suFirst");
                const lastName = val("#suLast");
                const email = val("#suEmail");
                const password = form.querySelector("#suPass").value;
                const phone = val("#suPhone");

                if (!firstName || !lastName) throw new Error("Please enter your first and last name.");
                if (!/^\S+@\S+\.\S+$/.test(email)) throw new Error("Please enter a valid email address.");
                if (password.length < 6) throw new Error("Password must be at least 6 characters.");
                if (phone && !/^\d{6,12}$/.test(phone)) throw new Error("Please enter a valid contact number.");
                if (!form.querySelector("#suTerms").checked) throw new Error("Please accept the Terms & Conditions.");

                btn.disabled = true;
                await signUp({
                    firstName, lastName, email, password,
                    phone: phone ? form.querySelector("#suCC").value + phone : "",
                    emailOpt: form.querySelector("#suEmailOpt").checked,
                    smsOpt: form.querySelector("#suSmsOpt").checked
                });

                showView("signin");
                showMsg("Account created! Please sign in.", true);
                body.querySelector("#authEmail").value = email;
            }
        } catch (err) {
            showMsg(err.message);
            if (btn) btn.disabled = false;
        }
    });
}