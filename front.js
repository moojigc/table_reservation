const reservationURL = 'https://enigmatic-brook-19419.herokuapp.com/api/reservations';
const $reservations = $('#reservations');


async function getReservation() {
    const res = await $.ajax({
        url: reservationURL,
        method: 'GET'
    })
    console.log(res);
    res.forEach(reservation => {
        const $cardTemplate = `<div class="card">
        <div class="card-header">
          ${reservation.name}
        </div>
        <div class="card-body" style="padding: 0;" >
          <ul class="list-group">
            <li class="list-group-item">Phone: ${reservation.phone}</li>
            <li class="list-group-item">ID: ${reservation.id}</li>
          </ul>
        </div>
      </div>`
      $reservations.append($cardTemplate);
    });

}

getReservation();