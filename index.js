const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
    // TODO: Log the answer in a database
    // console.log(`Thank you for your valuable feedback: ${answer}`);
    var a = answer.split('');
    for(let i = 0; i < a.length; i++){
        if(a[i] == '(' && a[i+1] == ')'){
            break;
        }
        else if(a[i] == '[' && a[i+1] == ']'){
            break;
        }
        else if(a[i] == '{' && a[i+1] == '}'){
            break;
        }
        else return 'FALSE';
    }
    return 'TRUE';
    
    console.log(a)
    
    rl.close();
  });

