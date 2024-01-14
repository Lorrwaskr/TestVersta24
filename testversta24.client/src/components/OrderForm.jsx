import { createOrder } from "../api";
import { useFormik } from 'formik';
import NavigationPanel from './Navigation';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import ModalWindow from "./ModalWindow";
import { useDispatch } from "react-redux";
import { actionCreators } from '../redux/actions';

const OrderForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      senderCity: '',
      senderAddress: '',
      recipientCity: '',
      recipientAddress: '',
      weight: 0,
      date: new Date().toISOString().slice(0, 10),
    },
    onSubmit: async (values) => {
      try {
        await createOrder(values);
        dispatch(actionCreators.setModalMessage("Заказ создан"));
      }
      catch (e) {
        dispatch(actionCreators.setModalMessage("Произошла ошибка"));
      }
      dispatch(actionCreators.toggleModal())
    },
  });

  return (
    <div className='container'>
      <NavigationPanel/>
      <ModalWindow/>
      <Form className='order-form' onSubmit={formik.handleSubmit}>
        <FormGroup>
          <Label for="senderCity" className="form-label">Город отправителя:</Label>
          <Input type="text" name="senderCity" id="senderCity" value={formik.values.senderCity} placeholder="Введите город отправителя" onChange={formik.handleChange} required/>
        </FormGroup>
        <FormGroup>
          <Label for="senderAddress" className="form-label">Адрес отправителя:</Label>
          <Input type="text" name="senderAddress" id="senderAddress" value={formik.values.senderAddress} placeholder="Введите адрес отправителя" onChange={formik.handleChange} required/>
        </FormGroup>
        <FormGroup>
          <Label for="recipientCity" className="form-label">Город получателя:</Label>
          <Input type="text" name="recipientCity" id="recipientCity" value={formik.values.recipientCity} placeholder="Введите город получателя" onChange={formik.handleChange} required/>
        </FormGroup>
        <FormGroup>
          <Label for="recipientAddress" className="form-label">Адрес получателя:</Label>
          <Input type="text" name="recipientAddress" id="recipientAddress" value={formik.values.recipientAddress} placeholder="Введите адрес получателя" onChange={formik.handleChange} required/>
        </FormGroup>
        <FormGroup>
          <Label for="weight" className="form-label">Вес груза:</Label>
          <Input type="number" name="weight" id="weight" value={formik.values.weight} min={0} placeholder="Введите вес груза" onChange={formik.handleChange} required/>
        </FormGroup>
        <FormGroup>
          <Label for="date" className="form-label">Дата забора груза:</Label>
          <Input type="date" name="date" id="date" value={formik.values.date} min={new Date().toISOString().slice(0, 10)} onChange={formik.handleChange} required/>
        </FormGroup>
        <Button className="form-button" type="submit">Отправить</Button>
      </Form>
    </div>
  );
};

export default OrderForm;
