Paddle.Setup({ vendor: 4062 });
function openCheckout(id, email = null) {
    Paddle.Checkout.open({
        product: id,
        email: email
    });
}
$('.buy').on('click', (e) => openCheckout($(e.target).data('id')));
