import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 20,
  },
  hardWaysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  hardWayItem: {
    alignItems: 'center',
  },
  hardWayItemText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  betAmountContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  resultContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  result: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputContainer: {
    alignItems: 'center',
    marginVertical: 30,
    justifyContent: 'center',
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '80%',
    marginVertical: 10,
    fontSize: 20,
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginVertical: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resetButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginVertical: 20,
  },
  resetButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  payout: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  payoutDescription: {
    fontSize: 16,
    marginVertical: 5,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  payoutAmount: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  pointContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  betTypeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  pointButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  betTypeButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  pointButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  betButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  pointButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  pointButtonActive: {
    backgroundColor: 'green',
  },
});