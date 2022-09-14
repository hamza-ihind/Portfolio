import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
	projectId: '7c6rw2p1',
	dataset: 'production',
	apiVersion: '2022-09-01',
	useCdn: true,
	token:
		'skATVUwpZv9NVtqZsFn07WNS5Z4O8ltH63wopqnO0xKqrxCK7AS18D1SG54Qsp7WTaCk15r2S1Vng7rFVbP0Or1jWCitw8WLNp3g5q9hfBS8whiwk082rxkC0zc4PYLXuynj57BfMVz60Gud8Qo3PqPCvl5Qc9izAyMZPsT1QVyjyKICAEg0',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
