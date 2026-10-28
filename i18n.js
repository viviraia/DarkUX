// Translations. HTML keeps the English text as a fallback; elements with
// data-i18n get their innerHTML swapped, data-i18n-placeholder their placeholder.
const translations = {
  en: {
    "title.home": "Subscrivo - Manage Your Subscriptions",
    "title.features": "Subscrivo | Features",
    "title.pricing": "Subscrivo | Pricing",
    "title.help": "Subscrivo | Help Center",

    "nav.home": "Home",
    "nav.features": "Features",
    "nav.pricing": "Pricing",
    "nav.help": "Help",
    "nav.lang": "PT",

    "footer.copy": "&copy; 2025 Subscrivo Inc. All rights reserved.",
    "footer.unsubscribe": "Unsubscribe",

    "home.tagline": "Finally, one place to manage every subscription (we promise...)",
    "home.heroTitle": "Take Back Control of Your Subscriptions",
    "home.heroText": "Start your free trial now — no strings attached*",
    "home.startTrial": "Start My Trial",
    "home.darkTrick": "No I dont like Money",
    "home.tinyNote": "*14-day trial auto-renews at $29.99/month",
    "home.paymentTitle": "Enter Payment Info",
    "home.cardNumber": "Card Number",
    "home.cardExpiry": "MM/YY",
    "home.cardCvc": "CVC",
    "home.submitCard": "Start Trial Now",
    "home.ad1": "<strong>You may qualify for a $50 reward</strong><br>Click here to find out how",
    "home.formTitle": "Create your account to continue",
    "home.fullName": "Full Name",
    "home.email": "Email Address",
    "home.password": "Create Password",
    "home.partnerOffers": "Subscribe me to partner offers and promotions.",
    "home.continue": "Continue",
    "home.ad2": "<strong>Single Moms In Your Area🔥🔥🔥(2Km)</strong><br>Click here to connect with them",

    "features.tagline": "Magically manage all your subscriptions (or so we say)",
    "features.title": "Our Features (Only the Ones We Like to Mention)",
    "features.viewAll": "✅ View all subscriptions (but only the ones we track)",
    "features.cancel": "✅ Cancel with 1 click* <span class=\"tiny-note\">(*click initiates a 7-day email thread)</span>",
    "features.partners": "✅ Partner offers (whether you want them or not)",
    "features.support": "✅ 24/7 Support Chatbot (actual humans sold separately)",

    "pricing.tagline": "Our pricing is simple — if you can find it.",
    "pricing.title": "Choose a Plan (Or Don’t — We’ll Choose for You)",
    "pricing.basic": "<strong>Basic</strong> – Free forever*",
    "pricing.basicNote": "*Until you accidentally upgrade via a hidden toggle",
    "pricing.pro": "<strong>Pro</strong> – $29.99/month",
    "pricing.proNote": "Auto-renews, no reminder emails",
    "pricing.premium": "<strong>Premium+</strong> – $99/month",
    "pricing.premiumNote": "Includes a phone number to call us — maybe",

    "help.tagline": "Need help? We make it hard for a reason.",
    "help.no": "NO",
    "help.neither": "Can’t find your answer? Neither can we.",
    "help.faq": "See if there is something in the FUC... <a href=\"FAQ.html\">FAQ</a>",
    "faq.lol": "LOL",

    "alert.trialStarted": "Your trial has started! Your card will be charged $29.99/month after 14 days. We will NOT remind you.",
    "confirm.missOut": "Are you sure you want to miss out on exclusive benefits?",
    "alert.missingOut": "That's okay. You'll be missing out though 😢",
    "button.processing": "Processing...",
    "alert.signedUp": "Thanks for signing up! Also, 7 promotional lists just gained a new friend 👀",
    "alert.unsubscribe": "Unsubscribing requires a phone call. Hold time may exceed 2 hours.",
    "modal.title": "Wait! You're Leaving Savings Behind!",
    "modal.text": "Subscribing now guarantees exclusive benefits you won’t get later.",
    "modal.yes": "Yes, Sign Me Up",
    "modal.no": "No, I Enjoy Overpaying",
    "alert.welcomePremium": "You're signed up! Welcome to Premium+ 🤝",
    "alert.didNotWork": "This action did not work, redirecting..."
  },

  pt: {
    "title.home": "Subscrivo - Gerencie Suas Assinaturas",
    "title.features": "Subscrivo | Recursos",
    "title.pricing": "Subscrivo | Preços",
    "title.help": "Subscrivo | Central de Ajuda",

    "nav.home": "Início",
    "nav.features": "Recursos",
    "nav.pricing": "Preços",
    "nav.help": "Ajuda",
    "nav.lang": "EN",

    "footer.copy": "&copy; 2025 Subscrivo Inc. Todos os direitos reservados.",
    "footer.unsubscribe": "Cancelar inscrição",

    "home.tagline": "Finalmente, um só lugar para gerenciar todas as suas assinaturas (prometemos...)",
    "home.heroTitle": "Retome o Controle das Suas Assinaturas",
    "home.heroText": "Comece seu teste grátis agora — sem pegadinhas*",
    "home.startTrial": "Começar Meu Teste",
    "home.darkTrick": "Nao eu nao gosto de Dinheiro",
    "home.tinyNote": "*Teste de 14 dias renova automaticamente por R$ 29,99/mês",
    "home.paymentTitle": "Insira os Dados de Pagamento",
    "home.cardNumber": "Número do Cartão",
    "home.cardExpiry": "MM/AA",
    "home.cardCvc": "CVC",
    "home.submitCard": "Começar Teste Agora",
    "home.ad1": "<strong>Você pode ter direito a uma recompensa de R$ 50</strong><br>Clique aqui para descobrir como",
    "home.formTitle": "Crie sua conta para continuar",
    "home.fullName": "Nome Completo",
    "home.email": "E-mail",
    "home.password": "Crie uma Senha",
    "home.partnerOffers": "Quero receber ofertas e promoções de parceiros.",
    "home.continue": "Continuar",
    "home.ad2": "<strong>Mães Solteiras na Sua Região🔥🔥🔥(2Km)</strong><br>Clique aqui para conhecê-las",

    "features.tagline": "Gerencie todas as suas assinaturas como mágica (pelo menos é o que dizemos)",
    "features.title": "Nossos Recursos (Só os Que Gostamos de Mencionar)",
    "features.viewAll": "✅ Veja todas as suas assinaturas (mas só as que a gente rastreia)",
    "features.cancel": "✅ Cancele com 1 clique* <span class=\"tiny-note\">(*o clique inicia uma troca de e-mails de 7 dias)</span>",
    "features.partners": "✅ Ofertas de parceiros (querendo ou não)",
    "features.support": "✅ Chatbot de suporte 24/7 (humanos de verdade vendidos separadamente)",

    "pricing.tagline": "Nossos preços são simples — se você conseguir encontrá-los.",
    "pricing.title": "Escolha um Plano (Ou Não — A Gente Escolhe por Você)",
    "pricing.basic": "<strong>Básico</strong> – Grátis para sempre*",
    "pricing.basicNote": "*Até você fazer upgrade sem querer por uma chavinha escondida",
    "pricing.pro": "<strong>Pro</strong> – R$ 29,99/mês",
    "pricing.proNote": "Renova automaticamente, sem e-mails de lembrete",
    "pricing.premium": "<strong>Premium+</strong> – R$ 99/mês",
    "pricing.premiumNote": "Inclui um número de telefone para falar com a gente — talvez",

    "help.tagline": "Precisa de ajuda? Dificultamos de propósito.",
    "help.no": "NÃO",
    "help.neither": "Não achou sua resposta? Nem a gente.",
    "help.faq": "Veja se tem alguma coisa no PQP... <a href=\"FAQ.html\">FAQ</a>",
    "faq.lol": "KKKKKKKKK",

    "alert.trialStarted": "Seu teste começou! Seu cartão será cobrado em R$ 29,99/mês após 14 dias. NÃO vamos te lembrar.",
    "confirm.missOut": "Tem certeza de que quer perder benefícios exclusivos?",
    "alert.missingOut": "Tudo bem. Mas você vai sair perdendo 😢",
    "button.processing": "Processando...",
    "alert.signedUp": "Obrigado por se cadastrar! Ah, e 7 listas promocionais acabaram de ganhar um novo amigo 👀",
    "alert.unsubscribe": "Para cancelar a inscrição é preciso ligar para a gente. O tempo de espera pode passar de 2 horas.",
    "modal.title": "Espera! Você Está Deixando Economias para Trás!",
    "modal.text": "Assinando agora você garante benefícios exclusivos que não vai ter depois.",
    "modal.yes": "Sim, Quero Assinar",
    "modal.no": "Não, Eu Adoro Pagar Caro",
    "alert.welcomePremium": "Pronto, você assinou! Bem-vindo ao Premium+ 🤝",
    "alert.didNotWork": "Esta ação não funcionou, redirecionando..."
  }
};

// Language priority: ?lang= in the URL, then the last choice, then the browser.
function detectLang() {
  const fromUrl = new URLSearchParams(window.location.search).get("lang");
  if (fromUrl && translations[fromUrl]) return fromUrl;
  try {
    const saved = localStorage.getItem("lang");
    if (saved && translations[saved]) return saved;
  } catch (e) {}
  return (navigator.language || "en").toLowerCase().startsWith("pt") ? "pt" : "en";
}

let currentLang = detectLang();

function t(key) {
  return translations[currentLang][key] ?? translations.en[key] ?? key;
}

function applyTranslations() {
  document.documentElement.lang = currentLang === "pt" ? "pt-BR" : "en";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.innerHTML = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });

  // Keep the language in the URL and in every internal link so it carries over.
  document.querySelectorAll('a[href*=".html"]').forEach((a) => {
    a.setAttribute("href", a.getAttribute("href").split("?")[0] + "?lang=" + currentLang);
  });
  try {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", currentLang);
    history.replaceState(null, "", url);
  } catch (e) {}
}

function setLang(lang) {
  currentLang = lang;
  try { localStorage.setItem("lang", lang); } catch (e) {}
  applyTranslations();
}

document.getElementById("langToggle").addEventListener("click", (e) => {
  e.preventDefault();
  setLang(currentLang === "en" ? "pt" : "en");
});

applyTranslations();
