// Mock data layer — swap this module out for real API calls later.
// Every screen imports from here so the app is fully click-through/demoable.

export const chef = {
  name: 'Chef Ninong Ry',
  email: 'ninong.ry.culinary@gmail.com',
  title: 'Master Eater',
  avatar: 'https://images.gmanews.tv/webpics/2025/02/ninong_ry_2025_02_10_16_39_37.jpg',
  dietary: ['Vegetarian', 'Gluten-Free', 'Nut Allergy'],
};

export const recipes = [
  {
    id: 'r1',
    title: 'Roasted Heirloom Carrots with Pistachio Dukkah',
    time: '35 min',
    score: 'A',
    tags: ['Vegan', 'High-Protein'],
    image: 'https://images.unsplash.com/photo-1606850780554-b55ea4dd0b70?w=800&q=80',
    description:
      'Sweet roasted heirloom carrots finished with a crunchy pistachio dukkah and a bright citrus yogurt.',
  },
  {
    id: 'r2',
    title: 'Wild Mushroom & Thyme Risotto',
    time: '45 min',
    score: 'B',
    tags: ['Vegetarian'],
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=800&q=80',
    description:
      'A slow-stirred arborio risotto loaded with wild mushrooms, fresh thyme and a generous swirl of parmesan.',
  },
  {
    id: 'r3',
    title: 'Roasted Herb Polenta',
    time: '25 min',
    score: 'A',
    tags: ['Quick'],
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80',
    description: 'A perfect 1:1 swap for heavy starches — creamy polenta finished with roasted herbs.',
  },
  {
    id: 'r4',
    title: 'Roasted Garlic & Sage Soup',
    time: '45 min',
    score: 'A',
    tags: ['Dinner'],
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80',
    description: 'Silky roasted garlic soup finished with crisped sage leaves and cream.',
  },
  {
    id: 'r5',
    title: 'Matcha Millet Crepe',
    time: '20 min',
    score: 'A',
    tags: ['Dessert'],
    image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=800&q=80',
    description: 'Delicate matcha-dusted millet crepes rolled with sweetened mascarpone.',
  },
  {
    id: 'r6',
    title: 'Morning Green Shakshuka',
    time: '30 min',
    score: 'B',
    tags: ['Breakfast'],
    image: 'https://images.unsplash.com/photo-1590412200988-a436970781fa?w=800&q=80',
    description: 'A green take on the classic — poached eggs over a bed of herby simmered greens.',
  },
  {
    id: 'r7',
    title: 'Clear Broth Noodles',
    time: '15 min',
    score: 'A',
    tags: ['Lunch'],
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80',
    description: 'A light, fragrant clear broth with silky noodles and fresh herbs.',
  },
  {
    id: 'r8',
    title: 'Seared Scallops',
    time: '11 min',
    score: 'A',
    tags: ['Main'],
    image: 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=800&q=80',
    description: 'Golden seared scallops over a bright pea puree with brown butter.',
  },
];

export const savedRecipes = [recipes[3], recipes[4], recipes[5], recipes[6], recipes[7]];

export const quickTools = [
  { id: 'q1', label: 'Substitute\nFinder', icon: 'swap-horizontal' },
  { id: 'q2', label: 'Recipe\nCollection', icon: 'book' },
];

export const shoppingList = {
  produce: [
    { id: 'p1', name: 'Heirloom Tomatoes', checked: false },
    { id: 'p2', name: 'Fresh Basil (Large Bunch)', checked: false },
    { id: 'p3', name: 'Meyer Lemons', checked: true },
  ],
  pantry: [
    { id: 'pa1', name: 'Arborio Rice', checked: false },
    { id: 'pa2', name: 'Extra Virgin Olive Oil', checked: false, badge: 'Low' },
  ],
  dairy: [
    { id: 'd1', name: 'Oat Milk (Barista Blend)', checked: true },
    { id: 'd2', name: 'Parmigiano Reggiano', checked: false },
  ],
};

export const ingredientSwaps = {
  butter: {
    name: 'Butter',
    subtitle: 'Looking to replace butter? Explore our curated artistic swaps below.',
    image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400&q=80',
    swaps: [
      {
        id: 's1',
        name: 'Avocado',
        tag: 'Heart Healthy',
        tone: 'success',
        description: 'Rich, creamy texture perfect for baking.',
        ratio: '1:1 (Avocado to Butter)',
        icon: '🥑',
      },
      {
        id: 's2',
        name: 'Coconut Oil',
        tag: 'Vegan',
        tone: 'sage',
        description: 'Adds a subtle sweetness and crispiness.',
        ratio: '1:1 (Melted)',
        icon: '🥥',
      },
      {
        id: 's3',
        name: 'Applesauce',
        tag: 'Low-Fat',
        tone: 'info',
        description: 'Excellent for moist cakes and quick breads.',
        ratio: '1:1 (Applesauce to Butter)',
        icon: '🍎',
      },
    ],
  },
};

export const molecularSwap = {
  targetName: 'Whole Egg (Avian)',
  targetId: 'PR-882A',
  targetImage: 'https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=600&q=80',
  systemMatch: '94% Structural Swap',
  targetMetrics: {
    pHLevel: '7.2 - 7.6',
    moisture: '76.1%',
    coagulationTemp: '73°C',
    function: 'Binder, Aerator',
  },
  substitute: {
    name: 'Aquafaba Liquid',
    id: 'AQ-091K',
    image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=600&q=80',
    confidence: '98% Confidence',
    stats: [
      { label: '+2G SOLUBLE FIBER', tone: 'success' },
      { label: '0MG CHOLESTEROL', tone: 'success' },
      { label: '~10G LIPIDS', tone: 'error' },
    ],
    metrics: {
      pHLevel: { value: '6.0 - 6.2', note: 'Lower', noteTone: 'info' },
      moisture: { value: '91.4%', note: '+15%', noteTone: 'warning' },
      coagulationTemp: { value: 'N/A (Foaming)', note: null },
      function: { value: 'Binder, Aerator', note: null },
    },
  },
};

export const savedSwapDetails = {
  'Roasted Garlic & Sage Soup': { time: '45 min', category: 'Dinner' },
};

export const chatMessages = [
  {
    id: 'm1',
    from: 'assistant',
    text: 'Hello! What are you planning to cook today?',
    time: '10:42 AM',
  },
  {
    id: 'm2',
    from: 'user',
    text: "I want to make a carbonara, but I don't have guanciale or pancetta. What can I use instead?",
    time: '10:43 AM',
  },
  {
    id: 'm3',
    from: 'assistant',
    text: "No problem! Traditional carbonara relies on the rendered fat and savory flavor of cured pork. If you're out of guanciale or pancetta, here is the best substitute:",
    time: '10:44 AM',
    suggestion: {
      badge: 'BEST ALTERNATIVE',
      name: 'Thick-Cut Bacon',
      description:
        'Use good quality, thick-cut bacon. Blanch it in boiling water for 2–3 minutes first to remove some of the smoky flavor, which isn\u2019t traditional in carbonara.',
      cta: 'Add to Shopping List',
    },
  },
];

export const insights = {
  activeCooks: '12.4k',
  swapVolume: '482k',
  aiAccuracy: '99.1%',
  weeklyGrowth: '+18.2%',
  chartData: [12, 18, 15, 24, 28, 26, 34, 31, 38, 42, 39, 46],
  chartLabels: ['Mon', 'Wed', 'Fri', 'Sun'],
};

export const settingsGroups = [
  {
    title: 'Account',
    items: [
      { id: 'personal', icon: 'person-outline', label: 'Personal Info', sub: 'Name, email, contact' },
      { id: 'security', icon: 'shield-checkmark-outline', label: 'Security', sub: 'Password, 2FA' },
      { id: 'billing', icon: 'card-outline', label: 'Billing', sub: 'Payment methods, history' },
    ],
  },
  {
    title: 'Preferences',
    items: [
      { id: 'notifications', icon: 'notifications-outline', label: 'Notifications', sub: 'Push, email alerts' },
      { id: 'dietary', icon: 'nutrition-outline', label: 'Dietary Profile', sub: 'Allergies, diets' },
      { id: 'theme', icon: 'moon-outline', label: 'Dark Theme', sub: 'System default', toggle: true },
    ],
  },
  {
    title: 'Support',
    items: [
      { id: 'help', icon: 'help-circle-outline', label: 'Help Center' },
      { id: 'about', icon: 'information-circle-outline', label: 'About' },
    ],
  },
];
