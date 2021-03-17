//This will be for mixed messages project

const messengerFactory = (number, name) => {
    return{
        number,
        name,
        sendMessge(messenger, recipient, message){
            this.receiveMessage(messenger,recipient, message);
        },
        receiveMessage(messenger, recipient, message){
            console.log(`${messenger}: sent ${recipient} ${message}`);
        },
    }
};

const messageTerminal = {
    "Messengers" : [],
    handleMessage(typeOfMessage, messenger, recipient, message){
        let check = false;
                for (let messenger in this.Messengers){
                    if(this.Messengers[messenger].name === recipient || this.Messengers[messenger].number === recipient){
                        check = true;
                    }
                }
        if (check === false){
            console.log('Message Terminal: ' + 'That is not among the recipients, here they are.');
            this.printCurrentRecipients();
        }
        else{
            switch(typeOfMessage){
                case 'send':
                    this.Messengers.sendMessage(messenger, recipient, message);
                    break;
                case 'all':
                        this.Messengers.sendMessage(messenger, index, message);
                    break;
                default:
                    console.log('Message Handler', "That is an invalid request, try all or send.");
                    break;
            }
        }
    },
    "Random Messages" : ['Once I saw a dead armoredillow when going to school', 'Texas is poop for a severe snow storm.', 'Sometimes I feel like life is a third-person simulator'],
    sendRandomMessage(message){
        this['Messengers'].forEach(element => element.sendMessage('Message Handler', message));
    },
    retrieveRandomMessage(index){
        return this["Random Messages"][index% this["Random Messages"].length] ;
    },
    printCurrentRecipients(){
        this.Messengers.forEach(element => console.log(element.name, element.number));
    },
    runMessenger(){

        this.printCurrentRecipients();
        while(true){
            let ranNumber = Math.floor(Math.random()* 10200);
            let message = this.retrieveRandomMessage(ranNumber);
            let recipient = this.Messengers[Math.floor(Math.random() * 10 % this.Messengers.length)].name;
            console.log(recipient)
            this.setMessageAndRecipient(message, recipient);
            if(ranNumber % 100 === 0)
                break;
            if(ranNumber % 10 === 0)
                {
                    this.handleMessage('all', 'Message Handler', recipient, message);
                }
            else {
                let check = false;
                for (let messenger in this.Messengers){
                    if(messenger.name === recipient || messenger.number === recipient){
                        check = true;
                    }
                }
                if(check && ranNumber%5 != 0)
                    this.handleMessage('send', this.Messengers[Math.floor(Math.random()) * (this.Messengers.length - 1)].name, recipient, message);
                else{
                    this.handleMessage('na', this.Messengers[Math.floor(Math.random()) * (this.Messengers.length - 1)].name, recipient, message);
                }
            }
        }
    },
    initialize(Messengers){
        this.Messengers = Messengers
        this.runMessenger();
    },
    setMessageAndRecipient(message, recipient){
        this.message = message;
        this.recipient = recipient;
    }
};


let names = ['Steve', 'Mike', 'Trey', 'all']
let numberOfUsers = 3;
let name = '';
let Messengers = [{}];
while(numberOfUsers> 0 )
{
    Messengers.push(messengerFactory(Math.floor(Math.random() * 1000), names[numberOfUsers]));
    numberOfUsers-=1;
}
messageTerminal.initialize(Messengers);
