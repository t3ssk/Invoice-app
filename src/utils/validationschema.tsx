import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
	paymentDue: Yup.string().required('This field is required'),
	projectDescription: Yup.string()
		.min(4, 'The description is too short')
		.max(50, 'The description is too long')
		.required('This field is required'),
	clientsName: Yup.string()
		.min(6, "Please enter client's full name")
		.max(50, 'The name seems too long, try to make it shorter')
		.required('This field is required'),
	clientsEmail: Yup.string()
		.min(6, "Please enter client's full email")
		.max(50, 'The email seems too long, try to make it shorter')
		.email('You must enter an email address')
		.required('This field is required'),
	street: Yup.string()
		.min(
			5,
			'Your address is too short, it should include street name and number'
		)
		.max(50, 'Is this really just your street address?')
		.required('This field is required'),
	city: Yup.string()
		.min(2, 'Is this really your city name? The name seems too short.')
		.max(50, 'Is this really your city name? The name seems too long.')
		.required('This field is required'),
	postCode: Yup.string()
		.min(5, 'Is this really your post code name? Seems too short...')
		.max(6, 'Is this really your post code name? Seems too long.')
		.required('This field is required'),
	country: Yup.string()
		.min(
			4,
			'Is this really the name of the country you live in? It seems too short.'
		)
		.max(
			50,
			'Is this really the name of the country you live in? It seems too long.'
		)
		.required('This field is required'),
	name: Yup.string()
		.min(4, 'The name is too short')
		.max(50, 'The name is too long')
		.required('This field is required'),
	quantity: Yup.number().min(1, 'Minimum amount is 1').required(),
	price: Yup.number().min(1, 'You surely paid something...').required(),
});