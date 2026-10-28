export type Task = { label: string };
export type Challenge = { id: string; title: string; days: number; category: string; description: string; tasks: Task[] };
export const challenges: Challenge[] = [
  { id: 'foundation', title: 'The Foundation', days: 7, category: 'DISCIPLINE', description: 'Seven days to establish a standard you can actually maintain.', tasks: [{label:'Make your bed or reset your space'}, {label:'Move your body for 20 minutes'}, {label:'Complete one focused work session'}, {label:'Plan tomorrow before bed'}] },
  { id: 'focus', title: 'Focus Protocol', days: 14, category: 'FOCUS', description: 'Protect your attention. Reduce noise. Do the work.', tasks: [{label:'Complete a 45-minute distraction-free session'}, {label:'Limit unnecessary scrolling'}, {label:'Write your top priority for tomorrow'}] },
  { id: 'ghost30', title: 'Ghost Mode 30', days: 30, category: 'GROWTH', description: 'Thirty days of deliberate, measurable personal progress.', tasks: [{label:'Move or train for 30 minutes'}, {label:'Learn or practice for 30 minutes'}, {label:'Work on your main goal'}, {label:'Review today honestly'}] },
  { id: 'build', title: 'Build Something', days: 30, category: 'SKILLS', description: 'Turn your learning into a project you can show.', tasks: [{label:'Practice a valuable skill for 45 minutes'}, {label:'Make tangible progress on your project'}, {label:'Record what you learned'}] }
];
export const avatarOptions = ['◈', '◇', '✦', '⬡', '◉', '✳'];
export const themeOptions = ['graphite', 'steel', 'midnight'];
