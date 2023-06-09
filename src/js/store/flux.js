const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},

		allContacts: [],

		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getAllContacts: async () => {
				try {
					let response = await fetch('https://assets.breatheco.de/apis/fake/contact/agenda/jars_Agenda')
					let data = await response.json()

					if (response.ok) {
						setStore({
							allContacts: data
						})
					} else {
						console.log("Algo no esta bien")
					}

				} catch (error) {

				}

			},
			createContact: async (id) => {
				try {
					let response = await fetch('https://assets.breatheco.de/apis/fake/contact/agenda/jars_Agenda',
						{
							method: "POST",
							body: JSON.stringify(data),
							headers: {
								'Content-Type': 'application/json'
							}
						})

						if (response.ok) {
							setStore({
								allContacts: data
							})
						} else {
							console.log("Algo no esta bien")
						}

				} catch (error) {

				}
			}
		}
	};
};

export default getState;
