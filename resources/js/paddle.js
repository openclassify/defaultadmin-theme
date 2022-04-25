Paddle.Setup({vendor: 4062});

function openCheckout(id, email = null) {
    Paddle.Checkout.open({
        product: id,
        email: email,
        closeCallback: "checkoutClose",
        successCallback: "checkoutComplete",
    });
}

$('.buy').on('click', (e) => openCheckout($(e.target).data('id')));

function checkoutClose() {
    $("#renewModal").modal('toggle')
}

function checkoutComplete() {
    $("#renewModal").modal('toggle')
    window.location.reload()
}
