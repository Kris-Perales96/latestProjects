//This will be for mixed messages project

const messengerFactory = (number, name) => {
    return{
        number,
        name,
    }
};

const messageTerminal = {
    "Messengers" : [],
    receiveMessage(messenger, recipient, message){
        console.log(`${messenger}: sent ${recipient} ${message}`);
    },
    sendMessage(messenger, recipient, message){
        this.receiveMessage(messenger,recipient, message);
    },
    handleMessage(typeOfMessage, messenger, recipient, message){
        let check = false;
        for(let index = 0; index < this.Messengers.length; index++)
        {
            if(this.Messengers[index].name === recipient || this.Messengers[index].number === recipient)
                check = true;
        }
        if (check === false){
            this.sendMessage('Message Terminal', messenger, 'That is not among the recipients, here they are.');
            this.printCurrentRecipients();
        }
        else{
            switch(typeOfMessage){
                case 'send':
                    this.sendMessage(messenger, recipient, message);
                    break;
                case 'all':
                    let count = 0;
                    while(count < this.Messengers.length){
                        this.sendMessage(messenger, this.Messengers[count].name, message);
                        count+=1;
                    }  
                    break;
                default:
                    this.sendMessage('Message Handler', messenger, "That is an invalid request, try all or send.");
                    break;
            }
        }
    },
    "Random Messages" : ['Once I saw a dead armoredillow when going to school', 'Texas is poop for a severe snow storm.', 'Sometimes I feel like life is a third-person simulator'],
    retrieveRandomMessage(index){
        return this["Random Messages"][index% this["Random Messages"].length] ;
    },
    printCurrentRecipients(){
        this.Messengers.forEach(element => console.log(element.name, element.number));
    },
    runMessenger(){
        let counter = 0;
        this.printCurrentRecipients();
        while(counter < 30){
            let ranNumber = Math.floor(Math.random()* 10200);
            let message = this.retrieveRandomMessage(ranNumber);
            let recipient = this.Messengers[Math.floor(Math.random() * 10 % this.Messengers.length)].name;
            let messenger = this.Messengers[Math.floor(Math.random()) * (this.Messengers.length)].name;
            if(counter % 4 === 1)
                {
                    this.handleMessage('all', messenger, recipient, message);
                }
            else if( (counter + 1) % 15 === 0){
                this.handleMessage('send', messenger, 'Testing', message);
            }
            else {
                let check = false;
                for (let index = 0; index < this.Messengers.length; index++){
                    if(this.Messengers[index].name === recipient || this.Messengers[index].number === recipient){
                        check = true;
                    }
                }
                if(check && (counter + 1)%10 === 0)
                    this.handleMessage('na', messenger, recipient, message);
                else{
                    this.handleMessage('send', messenger, recipient, message);
                }
            }
            counter+=1;
        }
    },
    initialize(Messengers){
        this.Messengers = Messengers
        this.runMessenger();
    },
};


let names = ['Steve', 'Mike', 'Trey', 'Kay']
let numberOfUsers = 3;
let name = '';
let Messengers = [];
while(numberOfUsers> 0 )
{
    Messengers.push(messengerFactory(Math.floor(Math.random() * 1000), names[numberOfUsers]));
    numberOfUsers-=1;
}
messageTerminal.initialize(Messengers);
