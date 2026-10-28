# Subscrivo – an awful website

Subscrivo is a fake subscription-manager site built to teach students about **dark UX patterns** (a.k.a. deceptive design). It is used in a classroom game where students get a time limit and must spot as many dark patterns as they can. The game itself lives outside this repo — this repo is only the website and the answer key below.

Everything on the site is a joke. Nothing is stored, no card details leave the browser.

## Running it

No build step. Open `index.html` in a browser and click around (Home, Features, Pricing, Help, FAQ).

The site is available in English and Brazilian Portuguese. It picks the browser language by default; use the **PT / EN** button in the nav to switch. The language is kept in the URL (`?lang=pt` / `?lang=en`) and carried through every link, so you can also share a link that opens in a given language. The Portuguese version shows prices in R$. The answer key below quotes the English text.

| File | What it is |
|---|---|
| `index.html` | Landing page with most of the patterns (trial, form, ads, modal) |
| `features.html`, `pricing.html`, `help.html`, `FAQ.html` | Secondary pages |
| `styles.css`, `script.js` | Shared styling and the interactive traps |
| `i18n.js` | English and Portuguese text for every page, alert and the modal |
| `show/` | Separate static showcase of 4 textbook examples (not part of the hunt) |
| `help copy.html` | Old draft of the help page, not linked from anywhere |


## Pattern catalogue (answer key)

Difficulty: 🟢 easy· 🟡 medium· 🔴 hard.

### `index.html`

| # | Pattern | Where / what to look for | Why it is dark | Diff. |
|---|---|---|---|---|
| 1 | **Hidden costs / fine print** | Hero: "no strings attached*" with a tiny, pale note: *"14-day trial auto-renews at $29.99/month"* | The real price is buried in tiny low-contrast text | 🟢 |
| 2 | **Forced continuity** | Same note + the alert after submitting the card: *"charged $29.99/month after 14 days. We will NOT remind you."* | Free trial silently becomes a paid subscription, no reminder | 🟢 |
| 3 | **Card up front for a "free" trial** | "Start My Trial" reveals a payment form (card number, MM/YY, CVC) | A free trial that requires payment details | 🟢 |
| 4 | **Confirmshaming** | Red button: *"No I dont like Money"* | Declining is phrased as a stupid choice | 🟢 |
| 5 | **Confirmshaming (browser prompt)** | Clicking the red button: *"Are you sure you want to miss out on exclusive benefits?"* | Guilt-trip, plus the "sad" alert if you say no | 🟡 |
| 6 | **Misdirection** | The red "decline" button actually leads into the sign-up modal when you confirm | A button that looks like "no" behaves like "yes" | 🟡 |
| 7 | **Guilt / false urgency modal** | Modal: *"Wait! You're Leaving Savings Behind!"* | Pressure to reverse a decision | 🟡 |
| 8 | **Confirmshaming (modal)** | Modal buttons: green *"Yes, Sign Me Up"* vs grey *"No, I Enjoy Overpaying"* | Emotional wording + visual weight favours "yes" | 🟡 |
| 9 | **Interface interference (runaway button)** | In the modal, the "No" button jumps away when the cursor hovers it | Declining is physically hard | 🟢 |
| 10 | **Misdirection (fake "No")** | Clicking "No" says *"This action did not work, redirecting..."* and sends you to an unrelated page | The refuse option doesn't refuse | 🔴 |
| 11 | **Disguised ad** | Grey card: *"You may qualify for a $50 reward — Click here to find out how"* | Looks like site content, is an ad/clickbait | 🟢 |
| 12 | **Disguised ad / clickbait** | Card: *"Single Moms In Your Area 🔥🔥🔥 (2Km)"* | Lure with fake local-dating bait | 🟢 |
| 13 | **Forced registration** | Form: *"Create your account to continue"* (name, email, password) | Account demanded before you get anything | 🟡 |
| 14 | **Pre-checked opt-in (sneak into basket)** | Checkbox "Subscribe me to partner offers and promotions" is already ticked, text on the left and box pushed to the far right | Consent by default, easy to miss | 🟡 |
| 15 | **Friend spam / hidden sharing** | After "Continue" (with fake *Processing...* spinner): *"7 promotional lists just gained a new friend 👀"* | Your email is shared without clear consent | 🔴 |
| 16 | **Hidden unsubscribe** | Footer "Unsubscribe" link is the same colour as the footer background, bottom-right corner | Opt-out is invisible | 🔴 |
| 17 | **Roach motel** | Clicking Unsubscribe: *"Unsubscribing requires a phone call. Hold time may exceed 2 hours."* | Easy to get in, painful to get out | 🔴 |
| 18 | **Deceptive copy** | Header tagline: *"...one place to manage every subscription (we promise...)"* | Wink that the claim can't be trusted | 🟡 |
|...|**IF they find something that can also count you can give points**||



### `features.html`

| # | Pattern | Where / what to look for | Why it is dark | Diff. |
|---|---|---|---|---|
| 19 | **Misleading claim** | *"View all subscriptions (but only the ones we track)"* | Promises "all", delivers a subset | 🟡 |
| 20 | **Roach motel** | *"Cancel with 1 click\*"* → *"click initiates a 7-day email thread"* | Cancellation is deliberately slow | 🟡 |
| 21 | **Forced opt-in** | *"Partner offers (whether you want them or not)"* | Marketing cannot be declined | 🟢 |
| 22 | **Support obstruction** | *"24/7 Support Chatbot (actual humans sold separately)"* | Real help is paywalled | 🟡 |
| 23 | **Selective disclosure** | Heading *"Our Features (Only the Ones We Like to Mention)"* | Admits information is withheld | 🟢 |

### `pricing.html`

| # | Pattern | Where / what to look for | Why it is dark | Diff. |
|---|---|---|---|---|
| 24 | **Bait and switch** | Basic plan: *"Free forever\*"* → *"Until you accidentally upgrade via a hidden toggle"* | Free plan with a trap to upgrade | 🟡 |
| 25 | **Forced continuity (Pro)** | *"$29.99/month — Auto-renews, no reminder emails"* | Silent recurring charge | 🟡 |
| 26 | **Obstructed support (Premium+)** | *"Includes a phone number to call us — maybe"* | Paying customers still can't count on support | 🟡 |
| 27 | **Default plan chosen for you** | *"Choose a Plan (Or Don't — We'll Choose for You)"* | User choice overridden | 🟢 |
| 28 | **Obstruction** | Header: *"Our pricing is simple — if you can find it."* | Price info is hard to find | 🟢 |

### `help.html` and `FAQ.html`

| # | Pattern | Where / what to look for | Why it is dark | Diff. |
|---|---|---|---|---|
| 29 | **Support dead end** | `help.html`: big "NO", *"Can't find your answer? Neither can we."* | Help page that doesn't help | 🟢 |
| 30 | **Obstruction / dead-end loop** | The only link (to the FAQ) leads to a page that just says "LOL" with no way forward | Users are sent in a circle to nothing | 🟡 |
| 31 | **Deceptive tone** | Header: *"Need help? We make it hard for a reason."* | Admits friction is intentional | 🟢 |

### Every page

| # | Pattern | Where / what to look for | Why it is dark | Diff. |
|---|---|---|---|---|
| 32 | **Hidden unsubscribe** | Invisible footer link (same as #16) on every page | Opt-out hidden everywhere | 🔴 |

> Counting suggestion: #16 and #32 (and #17) are the same trap repeated; award points once per distinct pattern, or once per page — your call.
