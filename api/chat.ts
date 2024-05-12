const chats = [
  {
    chatId: '123456',
    type: 'individual',
    users: ['434234', '123123'],
    createdAt: '12/03/2024 at 02:34 PM',
    conversation: [
      {
        seen: true,
        sender: 'John Doe-123123',
        receiver: 'Josh Pant-234234',
        message: 'Hey John! I would like to ask you something.',
        createdAt: '25/02/2023 at 06:30 PM',
      },
      {
        seen: false,
        sender: 'Josh Pant-234234',
        receiver: 'John Doe-123123',
        message: "You don't have to ask anything.",
        createdAt: '25/02/2023 at 06:30 PM',
      },
    ],
  },
  {
    chatId: '123456',
    groupName: 'Gen-Z',
    type: 'group',
    users: ['434234', '123123', '333433', '234234', '191992', '858693'],
    createdAt: '12/03/2024 at 02:34 PM',
    conversation: [
      {
        type: 'image/video/audio/file',
        seen: true,
        sender: '123123',
        receiver: '234234',
        message: 'Hey John! I would like to ask you something.',
        createdAt: '25/02/2023 at 06:30 PM',
      },
      {
        type: 'text',
        seen: false,
        sender: '234234',
        receiver: '123123',
        message: "You don't have to ask anything.",
        createdAt: '25/02/2023 at 06:30 PM',
      },
    ],
  },
];
