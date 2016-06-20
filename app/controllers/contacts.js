import Ember from 'ember';

export default Ember.Controller.extend({
    emailValid:Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    msgValid:Ember.computed.gte('message.length', 5),
    emailInvalid: Ember.computed.not('emailValid'),
    msgInvalid: Ember.computed.not('msgValid'),
    isDisabled: Ember.computed.or('emailInvalid', 'msgInvalid'),

    actions:{
        sendMessage(){
            const email = this.get('emailAddress');
            const message = this.get('message');
            const newContact = this.store.createRecord('contact', { email:email, message:message });
            newContact.save().then((response)=>{
                this.set('responseMessage', `Thank you! We saved your contact with the following id: ${response.get('id')}`);
                this.set('emailAddress', '');
                this.set('message', '');
            });
        }
    }
});
