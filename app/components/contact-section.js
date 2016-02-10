import Ember from 'ember';

export default Ember.Component.extend({
	mandrill: Ember.inject.service('mandrill'),
	actions: {
	    sendMandrillEmail: function() {
	      var contactName = $('.name').val();
	      var contactEmail = $('.email').val();
	      var contactMessage = $('.message').val();
	      var contactHtml = 'Name:' + contactName +'<br/>' + 'Email:' + contactEmail +'<br/> Message:' +contactMessage;

	      let emailObject = {
	        message: {
	          html: contactHtml,
	          subject: 'Web Contact Form Lead',
	          from_email: contactEmail,
	          from_name: contactName,
	          to: [
					{
					  email: 'account@tgld.co',
					  name: 'Carlos',
					  type: "to"
					}
	          ]
	        }
	      };

	      this.get('mandrill').send(emailObject).then(function(response) {
	        var status = response[0].status;
	        console.log(status);
	        if ( status === 'rejected'){
	        	$('.form-control').val('');
	        	$('.contact-form-btn').css('border-color', '#FF0000');
	        	setTimeout(function(){
				  $('.contact-form-btn').css('border-color', '#F0DCA4');
				}, 2000);
	        } else if( status === 'sent' ){
	        	$('.contact-form-btn').css('border-color', '#54BB5B').html('Thank You!');
	        	setTimeout(function(){
				  $('.contact-form-btn').css('border-color', '#F0DCA4').html("Let's Talk");
				}, 2000);
	        	$('.form-control').val('');
	        }

	      });
	      
	    }
	}
});
