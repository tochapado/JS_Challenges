function phoneNumberDirectory(phones) {
  const directory = new Map();

  for(let i = 0; i < phones.length; i++) {
    const phone = phones[i].split(':');

    directory.set(phone[0], phone[1]);
  };

  return directory;
};

const phones = [
  'rola:420',
  'tatau:1337',
  'bago:1407',
];

console.log(phoneNumberDirectory(phones));