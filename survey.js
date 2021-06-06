const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? (Nicknames are also acceptable :)',  (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);
});

rl.question('What\'s an activity you like doing?',  (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);
});

rl.question('Whatfo you listen to while doing that?',  (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);
});

rl.question('Which meal is your favourite? (i.e. dinner, brunch)',  (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);
});

rl.question('What\'s your favourite thing to eat for that meal?',  (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);
});

rl.question('Which sport is your absolute favourite?',  (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);
});

rl.question('What\'s your super power? tell us what you\'re amazing at',  (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);
});

rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.on('line', (input) => {
    console.log(`Received: ${input}`); //whenever an 'enter', '\n', '\r' or 'r\n' is inputted
  });

  rl.on('history', (history) => {
    console.log(`Received: ${history}`); //if the array has changed
  });

  rl.pause(
  rl.on('pause', () => {
    console.log('Readline paused.'); //pause notification
  }));

  // rl.on('resume', () => {
  //   console.log('Readline resumed.'); //resume notification
  // });

  // rl.on('SIGCONT', () => {
  //   // `prompt` will automatically resume the stream **Not supported on Windows**
  //   rl.prompt();
  // });

  rl.on('SIGINT', () => {
    rl.question('Are you sure you want to exit? ', (answer) => {
      if (answer.match(/^y(es)?$/i)) rl.pause();
    });
  });

  rl.close();
});

// Once this code is invoked (ln 16), the Node.js application will not terminate until the readline.Interface is closed because the interface waits for data to be received on the input stream.