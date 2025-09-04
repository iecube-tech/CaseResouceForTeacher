// 测试数据
export const beforeTestData = [
  {
    type: 'CHOICE',
    question: 'BJT的三个电极分别是什么？',
    options: [
      '源极、漏极、栅极',
      '发射极、集电极、基极',
      '阳极、阴极、控制极',
      '输入极、输出极、公共极'
    ],
    answer: [1],
    studentAnswer: [1],
    score: 5,
    aiScore: 5,
    teacherScore: 5,
    analysis: 'BJT是双极结型晶体管，有三个电极：发射极(Emitter)、集电极(Collector)和基极(Base)'
  },
  {
    type: 'CHOICE',
    question: 'BJT的特征频率fT是指什么？',
    options: [
      '最高工作频率',
      '电流增益β下降到1时的频率',
      '功率增益为1时的频率',
      '电压增益下降3dB时的频率'
    ],
    answer: [1],
    studentAnswer: [0],
    score: 0,
    aiScore: 0,
    teacherScore: 0,
    analysis: '特征频率fT定义为电流增益β下降到1(0dB)时的频率'
  },
  {
    type: 'CHOICE',
    question: '测量BJT特征频率时，通常保持哪个参数恒定？',
    options: [
      '基极电流',
      '集电极电流',
      '发射极电流',
      '集电极电压'
    ],
    answer: [1], // Changed from 'B' to 1 (index)
    studentAnswer: [1], // Changed from 'B' to 1 (index)
    score: 5,
    aiScore: 5,
    teacherScore: 5,
    analysis: '测量特征频率时通常保持集电极电流恒定'
  },
  {
    type: 'MULTIPLECHOICE',
    question: '影响BJT特征频率的因素包括哪些？',
    options: [
      '基区宽度',
      '工作电流',
      '温度',
      '集电极电压'
    ],
    answer: [0, 1, 2], // Changed from ['A', 'B', 'C'] to [0, 1, 2]
    studentAnswer: [0, 1, 2, 3], // Changed from ['A', 'B', 'C', 'D'] to [0, 1, 2, 3]
    score: 2,
    aiScore: 2,
    teacherScore: 2,
    analysis: '基区宽度、工作电流和温度都会影响BJT特征频率，集电极电压不是主要影响因素'
  },
  {
    type: 'MULTIPLECHOICE',
    question: 'BJT的高频等效电路中包括哪些电容？',
    options: [
      '发射结电容Cje',
      '集电结电容Cjc',
      '扩散电容Cd',
      '寄生电容Cp'
    ],
    answer: [0, 1, 2], // Changed from ['A', 'B', 'C'] to [0, 1, 2]
    studentAnswer: [0, 1, 2], // Changed from ['A', 'B', 'C'] to [0, 1, 2]
    score: 5,
    aiScore: 5,
    teacherScore: 5,
    analysis: 'BJT高频等效电路主要包括发射结电容、集电结电容和扩散电容'
  }
]