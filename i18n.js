// Tiny i18n helper: English (default) and Brazilian Portuguese.
// Elements use data-i18n (innerHTML) and data-i18n-ph (placeholder).
const translations = {
  en: {
    "lang.toggle": "🇧🇷 Português",
    "nav.home": "Home",
    "nav.features": "Features",
    "nav.pricing": "Pricing",
    "nav.help": "Help",
    "footer.rights": "&copy; 2025 Subscrivo Inc. All rights reserved.",
    "footer.unsubscribe": "Unsubscribe",

    "index.title": "Subscrivo - Manage Your Subscriptions",
    "index.tagline": "Finally, one place to manage every subscription (we promise...)",
    "hero.h2": "Take Back Control of Your Subscriptions",
    "hero.p": "Start your free trial now — no strings attached*",
    "cta.start": "Start My Trial",
    "cta.decline": "No I dont like Money",
    "hero.eyebrow": "Subscription management",
    "mock.title": "Your subscriptions",
    "mock.total": "per month",
    "mock.r1": "Gym you visited once",
    "mock.r1s": "Last visit: March 2023",
    "mock.r2": "Streaming service #7",
    "mock.r2s": "You forgot this one exists",
    "mock.r3": "Meal kit (paused*)",
    "mock.r3s": "*Pausing is not supported",
    "mock.r4s": "Cannot be cancelled",
    "pricing.popular": "Most popular",
    "hero.note": "*14-day trial auto-renews at $29.99/month",
    "card.h3": "Enter Payment Info",
    "card.number": "Card Number",
    "card.mm": "MM/YY",
    "card.cvc": "CVC",
    "card.submit": "Start Trial Now",
    "ad1": "<strong>You may qualify for a $50 reward</strong>Click here to find out how",
    "form.h3": "Create your account to continue",
    "form.name": "Full Name",
    "form.email": "Email Address",
    "form.password": "Create Password",
    "form.check": "Subscribe me to partner offers and promotions.",
    "form.continue": "Continue",
    "ad2": "<strong>Single Moms In Your Area🔥🔥🔥(2Km)</strong>Click here to connect with them",

    "msg.trial": "Your trial has started! Your card will be charged $29.99/month after 14 days. We will NOT remind you.",
    "msg.confirm": "Are you sure you want to miss out on exclusive benefits?",
    "msg.sad": "That's okay. You'll be missing out though 😢",
    "msg.processing": "Processing...",
    "msg.thanks": "Thanks for signing up! Also, 7 promotional lists just gained a new friend 👀",
    "msg.unsub": "Unsubscribing requires a phone call. Hold time may exceed 2 hours.",
    "modal.h2": "Wait! You're Leaving Savings Behind!",
    "modal.p": "Subscribing now guarantees exclusive benefits you won’t get later.",
    "modal.yes": "Yes, Sign Me Up",
    "modal.no": "No, I Enjoy Overpaying",
    "msg.signed": "You're signed up! Welcome to Premium+ 🤝",
    "msg.redirect": "This action did not work, redirecting...",

    "features.title": "Subscrivo | Features",
    "features.tagline": "Magically manage all your subscriptions (or so we say)",
    "features.h2": "Our Features (Only the Ones We Like to Mention)",
    "features.li1": "✅ View all subscriptions (but only the ones we track)",
    "features.li2": "✅ Cancel with 1 click* <span class=\"tiny-note\">(*click initiates a 7-day email thread)</span>",
    "features.li3": "✅ Partner offers (whether you want them or not)",
    "features.li4": "✅ 24/7 Support Chatbot (actual humans sold separately)",

    "pricing.title": "Subscrivo | Pricing",
    "pricing.tagline": "Our pricing is simple — if you can find it.",
    "pricing.h2": "Choose a Plan (Or Don’t — We’ll Choose for You)",
    "pricing.basic": "<strong>Basic</strong> <span class=\"price\">Free forever*</span><p class=\"tiny-note\">*Until you accidentally upgrade via a hidden toggle</p>",
    "pricing.pro": "<strong>Pro</strong> <span class=\"price\">$29.99/month</span><p class=\"tiny-note\">Auto-renews, no reminder emails</p>",
    "pricing.premium": "<strong>Premium+</strong> <span class=\"price\">$99/month</span><p class=\"tiny-note\">Includes a phone number to call us — maybe</p>",

    "help.title": "Subscrivo | Help Center",
    "help.tagline": "Need help? We make it hard for a reason.",
    "help.no": "NO",
    "help.p1": "Can’t find your answer? Neither can we.",
    "help.p2": "See if there is something in the FUC... <a href=\"FAQ.html\">FAQ</a>"
  },
  pt: {
    "lang.toggle": "🇺🇸 English",
    "nav.home": "Início",
    "nav.features": "Recursos",
    "nav.pricing": "Preços",
    "nav.help": "Ajuda",
    "footer.rights": "&copy; 2025 Subscrivo Inc. Todos os direitos reservados.",
    "footer.unsubscribe": "Cancelar inscrição",

    "index.title": "Subscrivo - Gerencie Suas Assinaturas",
    "index.tagline": "Finalmente, um só lugar para gerenciar todas as suas assinaturas (prometemos...)",
    "hero.h2": "Retome o Controle das Suas Assinaturas",
    "hero.p": "Comece seu teste grátis agora — sem pegadinhas*",
    "cta.start": "Começar Meu Teste",
    "cta.decline": "Não, eu não gosto de dinheiro",
    "hero.eyebrow": "Gestão de assinaturas",
    "mock.title": "Suas assinaturas",
    "mock.total": "por mês",
    "mock.r1": "Academia que você foi uma vez",
    "mock.r1s": "Última visita: março de 2023",
    "mock.r2": "Streaming nº 7",
    "mock.r2s": "Você esqueceu que ele existe",
    "mock.r3": "Kit de refeições (pausado*)",
    "mock.r3s": "*Pausar não é suportado",
    "mock.r4s": "Não pode ser cancelado",
    "pricing.popular": "Mais popular",
    "hero.note": "*O teste de 14 dias renova automaticamente por US$ 29,99/mês",
    "card.h3": "Informe os Dados de Pagamento",
    "card.number": "Número do Cartão",
    "card.mm": "MM/AA",
    "card.cvc": "CVC",
    "card.submit": "Começar Teste Agora",
    "ad1": "<strong>Você pode ter direito a um prêmio de US$ 50</strong>Clique aqui para descobrir como",
    "form.h3": "Crie sua conta para continuar",
    "form.name": "Nome Completo",
    "form.email": "Endereço de E-mail",
    "form.password": "Crie uma Senha",
    "form.check": "Quero receber ofertas e promoções de parceiros.",
    "form.continue": "Continuar",
    "ad2": "<strong>Mães Solteiras Perto de Você🔥🔥🔥(2Km)</strong>Clique aqui para conversar com elas",

    "msg.trial": "Seu teste começou! Seu cartão será cobrado em US$ 29,99/mês após 14 dias. NÃO enviaremos lembretes.",
    "msg.confirm": "Tem certeza de que quer perder benefícios exclusivos?",
    "msg.sad": "Tudo bem. Mas você vai ficar perdendo... 😢",
    "msg.processing": "Processando...",
    "msg.thanks": "Obrigado por se cadastrar! Aliás, 7 listas promocionais acabaram de ganhar um novo amigo 👀",
    "msg.unsub": "Cancelar a inscrição exige uma ligação telefônica. O tempo de espera pode passar de 2 horas.",
    "modal.h2": "Espere! Você está deixando economias para trás!",
    "modal.p": "Assinar agora garante benefícios exclusivos que você não terá depois.",
    "modal.yes": "Sim, Me Inscreva",
    "modal.no": "Não, Eu Gosto de Pagar Mais",
    "msg.signed": "Você está inscrito! Bem-vindo ao Premium+ 🤝",
    "msg.redirect": "Esta ação não funcionou, redirecionando...",

    "features.title": "Subscrivo | Recursos",
    "features.tagline": "Gerencie magicamente todas as suas assinaturas (ou pelo menos é o que dizemos)",
    "features.h2": "Nossos Recursos (Só os que Gostamos de Mencionar)",
    "features.li1": "✅ Veja todas as assinaturas (mas só as que nós rastreamos)",
    "features.li2": "✅ Cancele com 1 clique* <span class=\"tiny-note\">(*o clique inicia uma troca de e-mails de 7 dias)</span>",
    "features.li3": "✅ Ofertas de parceiros (você querendo ou não)",
    "features.li4": "✅ Chatbot de suporte 24/7 (atendentes humanos vendidos separadamente)",

    "pricing.title": "Subscrivo | Preços",
    "pricing.tagline": "Nossos preços são simples — se você conseguir achá-los.",
    "pricing.h2": "Escolha um Plano (Ou Não — Escolhemos por Você)",
    "pricing.basic": "<strong>Básico</strong> <span class=\"price\">Grátis para sempre*</span><p class=\"tiny-note\">*Até você fazer upgrade sem querer por um botão escondido</p>",
    "pricing.pro": "<strong>Pro</strong> <span class=\"price\">US$ 29,99/mês</span><p class=\"tiny-note\">Renova automaticamente, sem e-mails de lembrete</p>",
    "pricing.premium": "<strong>Premium+</strong> <span class=\"price\">US$ 99/mês</span><p class=\"tiny-note\">Inclui um número de telefone para ligar para nós — talvez</p>",

    "help.title": "Subscrivo | Central de Ajuda",
    "help.tagline": "Precisa de ajuda? Dificultamos de propósito.",
    "help.no": "NÃO",
    "help.p1": "Não achou sua resposta? Nós também não.",
    "help.p2": "Veja se tem algo no FUC... <a href=\"FAQ.html\">FAQ</a>"
  }
};

// Language priority: ?lang= in the URL, then the saved choice, then English.
let currentLang = "en";
try {
  const stored = localStorage.getItem("lang");
  if (stored && translations[stored]) currentLang = stored;
} catch (e) { /* storage unavailable: stay on English */ }
const urlLang = new URLSearchParams(window.location.search).get("lang");
if (urlLang && translations[urlLang]) currentLang = urlLang;

function t(key) {
  return translations[currentLang][key] ?? translations.en[key] ?? key;
}

function applyLang() {
  document.documentElement.lang = currentLang === "pt" ? "pt-BR" : "en";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.innerHTML = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    el.placeholder = t(el.dataset.i18nPh);
  });

  // Keep the language in the address bar and in every internal link,
  // so it survives page changes (and can be shared as a link).
  const url = new URL(window.location.href);
  url.searchParams.set("lang", currentLang);
  history.replaceState(null, "", url);
  document.querySelectorAll('a[href$=".html"], a[href*=".html?"]').forEach((a) => {
    const link = new URL(a.getAttribute("href"), window.location.href);
    link.searchParams.set("lang", currentLang);
    a.setAttribute("href", link.pathname.split("/").pop() + link.search);
  });
}

function setLang(lang) {
  currentLang = lang;
  try { localStorage.setItem("lang", lang); } catch (e) { /* ignore */ }
  applyLang();
}

document.addEventListener("DOMContentLoaded", () => {
  applyLang();
  document.getElementById("langToggle").addEventListener("click", () => {
    setLang(currentLang === "en" ? "pt" : "en");
  });
});
