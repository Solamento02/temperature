import { input, select } from '@inquirer/prompts';

async function options() {
    const questionOne = await select({
        message: 'Welcome! Choose your operation!',
        choices: [
            {
                name:'Fahrenheint to Celsius',
                value:'FtoC',
            },
            {
                name:'Celsius to Fahrenheit',
                value:'CtoF',
            },
            {
                name:'Exit',
                value:'out',
                description: 'byee!'
            },
        ]
    }); 

        if(questionOne === 'out'){
            process.exit(0)
        }

    async function answers(){
        const questionTwo = await input({
            message: 'Type your value',
        });

        if(questionOne === 'FtoC'){
            FtoC();
            options();
        } else if(questionOne === 'CtoF'){
            CtoF();
            options();
        }

        function CtoF(){
            var sum = (questionTwo * 9/5) + 32;
            console.log(`U value is ${sum}`)
        }

        function FtoC(){
            var sum = (questionTwo - 32) * 5/9;
            console.log(`U value is ${sum}`);
        }

    }

    answers();
}


options();