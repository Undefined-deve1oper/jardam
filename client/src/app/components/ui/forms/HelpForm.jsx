import React from "react";
import { validatorConfig } from "../../MainPage/validatorConfig";
import { toast } from "react-toastify";
import useForm from "../../../hooks/useForm";
import ticketService from "../../../../services/ticket.service";

const initialData = {
    email: "",
    name: "",
    message: "",
    cause: ""
};

const HelpForm = () => {
    const { data, handleChange, errors, validate, handleResetForm } = useForm(
        initialData,
        false,
        validatorConfig
    );

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (validate(data)) {
            await ticketService.create({ ...data, status: "pending" });
            toast.success("Сообщение успешно отправлено!");
            handleResetForm(event);
        }
    };
    
    return (
        <form className="feedback-form__row" onSubmit={handleSubmit}>
            <div className="feedback-form__item">
                <label>Email</label>
                <input
                    type="text"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    placeholder="example@mail.com"
                />
                {errors.email && <div className="error-message">{errors.email}</div>}
            </div>
            <div className="feedback-form__item">
                <label>Ваше имя</label>
                <input
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    placeholder="Марк Покровский"
                />
                {errors.name && <div className="error-message">{errors.name}</div>}
            </div>
            <div className="feedback-form__item">
                <label>Сообщение</label>
                <input
                    type="text"
                    name="message"
                    value={data.message}
                    onChange={handleChange}
                />
                {errors.message && <div className="error-message">{errors.message}</div>}
            </div>
            <div className="feedback-form__item">
                <label>Причина обращения</label>
                <select
                    name="cause"
                    value={data.cause}
                    onChange={handleChange}
                >
                    <option value="">Выберите причину</option>
                    <option value="errors">Баги</option>
                    <option value="offer">Вопрос</option>
                    <option value="other">Другое</option>
                </select>
                {errors.cause && <div className="error-message">{errors.cause}</div>}
            </div>
            <button type="submit" className="feedback-form__button">
                Отправить
            </button>
        </form>
    );
};

export default HelpForm;
