emailjs.init({
    publicKey: "dTIpb71rAsnxDolho",
});

window.onload = function() {
    document
        .getElementById('contact-form')
        .addEventListener('submit',
            function(event) {
                    event.preventDefault();
                    emailjs.sendForm('service_2q0carx', 'template_8kjk8yl', this, {})
                        .then(() => {
                            console.log('SUCCESS!');
                            this.reset()
                        }, (error) => {
                            console.log('FAILED...\n', error);
                        });
            });
}
