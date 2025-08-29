export interface Translations {
  [key: string]: {
    en: string;
    sw: string;
  };
}

export const translations: Translations = {
  // Hero Section
  'hero.title.stop': { en: 'Stop', sw: 'Zuia' },
  'hero.title.the': { en: 'the', sw: '' },
  'hero.title.damage': { en: 'damage', sw: 'uharibifu' },
  'hero.title.before': { en: 'before', sw: 'kabla' },
  'hero.title.it': { en: 'it', sw: 'ya' },
  'hero.title.starts': { en: 'starts', sw: 'kuanza' },
  'hero.subtitle': {
    en: 'Sensor-powered alerts that protect your cold rooms and prevent flooding.',
    sw: 'Tahadhari zinazotumia vipimo vya kielektroniki ili kulinda vyumba vyako vya baridi na kuzuia mafuriko.',
  },
  'hero.cta.pricing': { en: 'See Pricing', sw: 'Ona Bei' },
  'hero.cta.expert': { en: 'Talk to an Expert', sw: 'Zungumza na Mtaalamu' },

  // Navigation
  'nav.home': { en: 'Home', sw: 'Nyumbani' },
  'nav.products': { en: 'Products', sw: 'Bidhaa' },
  'nav.how': { en: 'How It Works', sw: 'Jinsi Inavyofanya Kazi' },
  'nav.dashboard': { en: 'Dashboard', sw: 'Dashibodi' },
  'nav.pricing': { en: 'Pricing', sw: 'Bei' },
  'nav.contact': { en: 'Contact', sw: 'Mawasiliano' },
  'nav.signIn': { en: 'Sign In', sw: 'Ingia' },
  'nav.signUp': { en: 'Sign Up', sw: 'Jisajili' },
  'nav.hello': { en: 'Hello', sw: 'Hujambo' },
  'nav.account': { en: 'Account', sw: 'Akaunti' },
  'nav.signOut': { en: 'Sign Out', sw: 'Toka' },

  // Problem Statement
  'problem.title': { en: 'The Silent Threat', sw: 'Tishio la Kimya' },
  'problem.description': {
    en: 'Temperature spikes and leaks do not announce themselves. Smart Owl warns you before stock is lost.',
    sw: 'Ongezeko la joto na uvujaji havijitangazi. Smart Owl inakuonya kabla ya kupoteza bidhaa.',
  },
  'problem.temp.title': { en: 'Temperature Failure', sw: 'Hitilafu ya Joto' },
  'problem.temp.cost': { en: '$50,000 lost in one night', sw: '$50,000 zilipotea usiku mmoja' },
  'problem.flood.title': { en: 'Flood Damage', sw: 'Uharibifu wa Mafuriko' },
  'problem.flood.cost': { en: 'Equipment replacement costs', sw: 'Gharama za kubadilisha vifaa' },
  'problem.late.title': { en: 'Late Detection', sw: 'Kugundua Kuchelewa' },
  'problem.late.cost': { en: 'Hours of downtime', sw: 'Masaa ya kusimama' },

  // Solution
  'solution.title': { en: 'No distractions. Just protection.', sw: 'Hakuna kuvurugika. Ulinzi tu.' },
  'product.coldroom': { en: 'Cold Room Sensor', sw: 'Kipimo cha Chumba cha Baridi' },
  'product.coldroom.desc': { en: 'Real-time temperature monitoring', sw: 'Ufuatiliaji wa joto wakati halisi' },
  'product.flood': { en: 'Flood Sensor', sw: 'Kipimo cha Mafuriko' },
  'product.flood.desc': { en: 'Instant leak detection', sw: 'Kugundua uvujaji papo hapo' },
  'product.wifi': { en: 'Wi-Fi Hub', sw: 'Kituo cha Wi-Fi' },
  'product.wifi.desc': { en: 'Central connectivity hub', sw: 'Kituo kikuu cha muunganisho' },
  'product.details': { en: 'Details', sw: 'Maelezo' },

  // Process
  'process.title': { en: 'How It Works', sw: 'Jinsi Inavyofanya Kazi' },
  'process.detect': { en: 'Detect', sw: 'Gundua' },
  'process.detect.desc': { en: 'Sensors monitor temperature and moisture 24/7', sw: 'Vipimo vinafuatilia joto na unyevu masaa 24/7' },
  'process.alert': { en: 'Alert', sw: 'Tahadhari' },
  'process.alert.desc': { en: 'Instant SMS and dashboard notifications', sw: 'Ujumbe wa SMS na arifa za dashibodi papo hapo' },
  'process.prevent': { en: 'Prevent', sw: 'Zuia' },
  'process.prevent.desc': { en: 'Take action before damage occurs', sw: 'Chukua hatua kabla ya uharibifu kutokea' },
  'process.temp.current': { en: 'Current Temperature', sw: 'Joto la Sasa' },
  'process.status.stable': { en: 'Stable', sw: 'Thabiti' },
  'process.status.rising': { en: 'Rising', sw: 'Inaongezeka' },
  'process.status.alert': { en: 'Alert Sent', sw: 'Tahadhari Imetumwa' },

  // Dashboard
  'dashboard.title': { en: 'Live Dashboard', sw: 'Dashibodi ya Moja kwa Moja' },
  'dashboard.subtitle': { en: 'Monitor all your sensors in real-time', sw: 'Fuatilia vipimo vyako vyote wakati halisi' },
  'dashboard.coldroom1': { en: 'Cold Room 1', sw: 'Chumba cha Baridi 1' },
  'dashboard.flood.sensor': { en: 'Flood Sensor', sw: 'Kipimo cha Mafuriko' },
  'dashboard.wifi.hub': { en: 'Wi-Fi Hub', sw: 'Kituo cha Wi-Fi' },
  'dashboard.stable': { en: 'Stable', sw: 'Thabiti' },
  'dashboard.leak.detected': { en: 'Leak detected', sw: 'Uvujaji umegundulika' },
  'dashboard.connected': { en: 'Connected', sw: 'Imeunganishwa' },
  'dashboard.notifications': { en: 'Recent Notifications', sw: 'Arifa za Hivi Karibuni' },
  'dashboard.phone.sent': { en: 'Notification sent to phone', sw: 'Arifa imetumwa kwenye simu' },
  'dashboard.temp.normalized': { en: 'Cold Room 1 temperature normalized', sw: 'Joto la Chumba cha Baridi 1 limekarabatiwa' },
  'dashboard.simulate': { en: 'Simulate different sensor states:', sw: 'Iga hali mbalimbali za vipimo:' },
  'dashboard.normal': { en: 'Normal', sw: 'Kawaida' },
  'dashboard.warning': { en: 'Warning', sw: 'Onyo' },
  'dashboard.critical': { en: 'Critical', sw: 'Hatari' },

  // Bridge
  'bridge.question': {
    en: 'How much could you lose if your cold room fails tonight?',
    sw: 'Ni kiasi gani unaweza kupoteza ikiwa chumba chako cha baridi kitaharibika usiku huu?',
  },
  'bridge.cta': { en: 'Protect it now', sw: 'Kilinde sasa' },

  // Pricing
  'pricing.title': { en: 'Simple, Transparent Pricing', sw: 'Bei Rahisi na Wazi' },
  'pricing.monthly': { en: 'Monthly', sw: 'Kila Mwezi' },
  'pricing.yearly': { en: 'Yearly', sw: 'Kila Mwaka' },
  'pricing.first.year.free': { en: 'First Year Free', sw: 'Mwaka wa Kwanza Bure' },
  'pricing.most.popular': { en: 'Most Popular', sw: 'Maarufu Zaidi' },
  'pricing.starter': { en: 'Starter', sw: 'Mwanzo' },
  'pricing.pro': { en: 'Pro', sw: 'Mtaalamu' },
  'pricing.enterprise': { en: 'Enterprise', sw: 'Biashara' },
  'pricing.month': { en: '/month', sw: '/mwezi' },
  'pricing.contact.us': { en: 'Contact us', sw: 'Wasiliana nasi' },
  'pricing.get.started': { en: 'Get Started', sw: 'Anza' },
  'pricing.contact.sales': { en: 'Contact Sales', sw: 'Wasiliana na Mauzo' },

  // Product Picker
  'picker.title': { en: 'Configure Your System', sw: 'Sanidi Mfumo Wako' },
  'picker.select.products': { en: 'Select Products', sw: 'Chagua Bidhaa' },
  'picker.order.summary': { en: 'Order Summary', sw: 'Muhtasari wa Agizo' },
  'picker.total': { en: 'Total', sw: 'Jumla' },
  'picker.proceed': { en: 'Proceed to Checkout', sw: 'Endelea na Malipo' },
  'picker.installation': { en: 'Professional Installation', sw: 'Usakinishaji wa Kitaalamu' },

  // Contact
  'contact.title': { en: 'Get In Touch', sw: 'Wasiliana' },
  'contact.subtitle': { en: "Ready to protect your assets? Let's talk.", sw: 'Uko tayari kulinda mali yako? Hebu tuzungumze.' },
  'contact.start': { en: 'Start a Conversation', sw: 'Anza Mazungumzo' },
  'contact.expert': { en: 'Contact Expert', sw: 'Wasiliana na Mtaalamu' },
  'contact.name': { en: 'Name', sw: 'Jina' },
  'contact.email': { en: 'Email', sw: 'Barua pepe' },
  'contact.message': { en: 'Message', sw: 'Ujumbe' },
  'contact.send': { en: 'Send Message', sw: 'Tuma Ujumbe' },
  'contact.success': { en: 'Message sent successfully!', sw: 'Ujumbe umetumwa kwa ufanisi!' },

  // Footer
  'footer.description': {
    en: 'Protecting your assets with intelligent sensor technology.',
    sw: 'Kulinda mali yako kwa teknolojia ya vipimo vya akili.',
  },
  'footer.products': { en: 'Products', sw: 'Bidhaa' },
  'footer.company': { en: 'Company', sw: 'Kampuni' },
  'footer.support': { en: 'Support', sw: 'Msaada' },
  'footer.newsletter': { en: 'Newsletter', sw: 'Jarida' },
  'footer.about': { en: 'About', sw: 'Kuhusu' },
  'footer.careers': { en: 'Careers', sw: 'Kazi' },
  'footer.documentation': { en: 'Documentation', sw: 'Nyaraka' },
  'footer.help': { en: 'Help Center', sw: 'Kituo cha Msaada' },
  'footer.copyright': { en: '© 2024 Smart Owl. All rights reserved.', sw: '© 2024 Smart Owl. Haki zote zimehifadhiwa.' },

  // Common
  'common.loading': { en: 'Loading...', sw: 'Inapakia...' },
  'common.error': { en: 'An error occurred', sw: 'Hitilafu imetokea' },
  'common.close': { en: 'Close', sw: 'Funga' },
  'common.cancel': { en: 'Cancel', sw: 'Ghairi' },
  'common.confirm': { en: 'Confirm', sw: 'Thibitisha' },
  'common.add': { en: 'Add', sw: 'Ongeza' },
  'common.remove': { en: 'Remove', sw: 'Ondoa' },
  'common.continue': { en: 'Continue', sw: 'Endelea' },

  // Devices
  'devices.title': { en: 'My Devices', sw: 'Vifaa Vyangu' },
  'devices.subtitle': { en: 'Manage your Smart Owl sensors and monitoring devices', sw: 'Dhibiti vipimo vyako vya Smart Owl na vifaa vya ufuatiliaji' },
  'devices.add': { en: 'Add Device', sw: 'Ongeza Kifaa' },
  'devices.empty.title': { en: 'No devices yet', sw: 'Hakuna vifaa bado' },
  'devices.empty.description': { en: 'Get started by adding your first Smart Owl device', sw: 'Anza kwa kuongeza kifaa chako cha kwanza cha Smart Owl' },
  'devices.barcode': { en: 'Device Barcode', sw: 'Barcode ya Kifaa' },
  'devices.barcode.placeholder': { en: 'Enter device barcode', sw: 'Ingiza barcode ya kifaa' },
  'devices.status': { en: 'Status', sw: 'Hali' },
  'devices.type': { en: 'Type', sw: 'Aina' },
  'devices.location': { en: 'Location', sw: 'Mahali' },
  'devices.location.placeholder': { en: 'Enter device location', sw: 'Ingiza mahali pa kifaa' },
  'devices.added': { en: 'Added', sw: 'Iliongezwa' },
  'devices.trial.ends': { en: 'Trial ends', sw: 'Jaribio linaisha' },
  'devices.subscription.status': { en: 'Subscription', sw: 'Usajili' },
  'devices.schedule.maintenance': { en: 'Schedule Maintenance', sw: 'Panga Matengenezo' },
  'devices.view.visits': { en: 'View Visits', sw: 'Ona Ziara' },
  'devices.status.active': { en: 'Active', sw: 'Inatumika' },
  'devices.status.inactive': { en: 'Inactive', sw: 'Haitumiki' },
  'devices.status.maintenance': { en: 'Maintenance', sw: 'Matengenezo' },
  'devices.type.coldroom': { en: 'Cold Room Sensor', sw: 'Kipimo cha Chumba cha Baridi' },
  'devices.type.flood': { en: 'Flood Sensor', sw: 'Kipimo cha Mafuriko' },
  'devices.type.wifi': { en: 'Wi-Fi Hub', sw: 'Kituo cha Wi-Fi' },
  'devices.add.success': { en: 'Device added successfully!', sw: 'Kifaa kimeongezwa kwa mafanikio!' },
  'devices.add.error': { en: 'Failed to add device', sw: 'Imeshindwa kuongeza kifaa' },
  'devices.maintenance.success': { en: 'Maintenance scheduled successfully!', sw: 'Matengenezo yamepangwa kwa mafanikio!' },
  'devices.maintenance.error': { en: 'Failed to schedule maintenance', sw: 'Imeshindwa kupanga matengenezo' },
  'devices.nav': { en: 'Devices', sw: 'Vifaa' },

  // Membership
  'membership.title': { en: 'Membership', sw: 'Uanachama' },
  'membership.status': { en: 'Status', sw: 'Hali' },
  'membership.year': { en: 'Year', sw: 'Mwaka' },
  'membership.trialEnds': { en: 'Trial Ends', sw: 'Jaribio Linaisha' },
  'membership.ensureMembership': { en: 'Activate Membership', sw: 'Amilisha Uanachama' },
  'membership.renewMembership': { en: 'Renew Membership', sw: 'Sasisha Uanachama' },
  'membership.membershipEnsured': { en: 'Membership activated successfully!', sw: 'Uanachama umeamilishwa kwa ufanisi!' },
  'membership.membershipRenewed': { en: 'Membership renewed successfully!', sw: 'Uanachama umesasishwa kwa ufanisi!' },
  'membership.errorEnsuring': { en: 'Failed to process membership', sw: 'Imeshindwa kuchakata uanachama' },
  'membership.trial': { en: 'Trial', sw: 'Jaribio' },
  'membership.active': { en: 'Active', sw: 'Hai' },
  'membership.expired': { en: 'Expired', sw: 'Imeisha' }
};

export class I18n {
  private static instance: I18n;
  private currentLang: 'en' | 'sw' = 'en';

  private constructor() {
    // Check if we're in a browser environment
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const savedLang = localStorage.getItem('language') as 'en' | 'sw';
      if (savedLang && ['en', 'sw'].includes(savedLang)) {
        this.currentLang = savedLang;
      }
    }
  }

  static getInstance(): I18n {
    if (!I18n.instance) {
      I18n.instance = new I18n();
    }
    return I18n.instance;
  }

  getCurrentLanguage(): 'en' | 'sw' {
    return this.currentLang;
  }

  setLanguage(lang: 'en' | 'sw'): void {
    this.currentLang = lang;
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  }

  t(key: string): string {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return translation[this.currentLang] || key;
  }
}

export const i18n = I18n.getInstance();