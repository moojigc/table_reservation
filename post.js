const reservationURL = '/api/reservations';

async function postReservation(data) {
    const postReq = await $.post(reservationURL, data);

    console.log(postReq);
}

$('#submit-btn').on('click', (event) => {
    event.preventDefault();
    const userData = {
        name: $('#name').val(),
        phone: $('#phone-number').val(),
        id: $('#id').val()
    };
    alert('Reservation added!');
    $('#name').val('');
    $('#phone-number').val('');
    $('#id').val('');
    postReservation(userData);
})
