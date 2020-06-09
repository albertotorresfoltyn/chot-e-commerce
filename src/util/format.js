// this export three methods, so we destruct and rename it all at once
export const { format: formatPrice } = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
});
