const Parse = require('./parse');

function printUsageAll() {
  printUsage();
  printUsageAdd();
  printUsageRemove();
  printUsageSetPassword();
  printUsageListUser();
}

function printUsage() {
  console.log('Usage: ');
}

function printUsageAdd() {
  console.log('parse-user add <username> <password>');
}

function printUsageRemove() {
  console.log('parse-user remove <username>');
}

function printUsageSetPassword() {
  console.log('parse-user set-password <username> <password>');
}

function printUsageListUser() {
  console.log('parse-user list');
}

async function addUser(username, password) {
  const q = new Parse.Query(Parse.User);
  q.equalTo('username', username);
  const user = await q.first({ useMasterKey: true });
  if (username.length < 4 || password.length < 4) {
    console.log('Username and Password must be atleast 4 characters long!');
    return;
  }
  if (user) {
    console.log('User already exist!');
    return;
  }
  const newUser = new Parse.User();
  newUser.set('username', username);
  newUser.set('password', password);
  await newUser.signUp({}, { useMasterKey: true });
  console.log(`User with username "${username}" created.`);
}

async function removeUser(username) {
  const q = new Parse.Query(Parse.User);
  q.equalTo('username', username);
  const user = await q.first({useMasterKey: true});
  if (username.length < 4) {
    console.log('Username must be atleast 4 characters long!');
    return;
  }
  if (!user) {
    console.log('User not found!');
    return;
  }
  await user.destroy({useMasterKey: true});
  console.log(`User with username "${username}" removed.`);

}

async function setPassword(username, password) {
  const q = new Parse.Query(Parse.User);
  q.equalTo('username', username);
  const user = await q.first({useMasterKey: true});
  if (username.length < 4 || password.length < 4) {
    console.log('Username and Password must be atleast 4 characters long!');
    return;
  }
  if (!user) {
    console.log('User not found!');
    return;
  }
  user.set('password', password);
  await user.save({}, { useMasterKey: true });
  console.log(`Password changed for user with username "${username}".`);
}

async function listUser() {
  const q = new Parse.Query(Parse.User);
  const users = await q.find({useMasterKey: true});
  console.log(users.map(u => u.get('username')));
}

if (process.argv.length < 3) {
  printUsageAll();
  process.exit(1);
}

const cmd = process.argv[2];

if (cmd.match(/add/gi)) {
  if (process.argv.length < 5) {
    printUsage();
    printUsageAdd();
    process.exit(1);
  }
  addUser(process.argv[3], process.argv[4]);
} else if (cmd.match(/remove/gi)) {
  if (process.argv.length < 4) {
    printUsage();
    printUsageRemove();
    process.exit(1);
  }
  removeUser(process.argv[3]);
} else if (cmd.match(/set-password/gi)) {
  if (process.argv.length < 5) {
    printUsage();
    printUsageSetPassword();
    process.exit(1);
  }
  setPassword(process.argv[3], process.argv[4]);
} else if (cmd.match(/list/gi)) {
  listUser();
} else {
  console.log('Invalid command!');
  printUsageAll();
  process.exit(1);
}