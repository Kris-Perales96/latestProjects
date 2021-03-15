//This will be for mixed messages project
const messageTerminal = {
    "Messengers" : [],
    handleMessage(typeOfMessage, messenger, receipient, message){
        if(!this["Messengers"].includes(recipient)){
            this.Messengers[messenger].sendMessage('Message Handler', "That is not among the recipients, here's the current recipients.");
            this.Messengers.forEach(element => console.log(element));
        }
        else{
            switch(typeOfMessage){
                case 'send':
                    this["Messengers"][recipient].sendMessage(messenger, message);
                    break;
                case 'all':
                    for(let index = 0; index < this["Messengers"].length; index++){
                        this["Messengers"][index].sendMessage(messenger,message);
                    }
                    break;
                default:
                    this["Messengers"][messenger].sendMessage('Message Handler', "That is an invalid request, try all or send.");
                    break;
            }
        }
    },
    "Random Messages" : ['Once I saw a dead armoredillow when going to school', 'Texas is poop for a severe snow storm.'],
    sendRandomMessage(message){
        this.Messengers.forEach(element => element.sendMessage('Message Handler', message));
    }
};

const messengerFactory = (number, name) => {
    return{
        number,
        name,
        sendMessge(messenger, message){
            this.receiveMessage(messenger, message);
        },
        receiveMessage(messenger, message){
            console.log(`${messenger}: ${message}`);
        },
    }
};