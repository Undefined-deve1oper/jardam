import React from "react";
import { toast } from "react-toastify";
import { validatorConfig } from "./validatorConfig";
import useForm from "../../../../hooks/useForm";
import "./volunter.css";

const initialData = {
    name: "",
    phoneNumber: "",
    location: "",
    whom: "",
    what:""
};

const VolunterForm = () => {
    const { data, handleChange, errors, validate, handleResetForm } = useForm(
        initialData,
        false,
        validatorConfig
    );

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (validate(data)) {
            // await ticketService.create({ ...data, status: "pending" });
            toast.success("Сообщение успешно отправлено!");
            handleResetForm(event);
        }
    };
    
    return (
        <form className="feedback-form__row" onSubmit={handleSubmit}>
            <div className="feedback-form__item">
                <input
                    type="text"
                    name="name"
                    value={data.name}
                    className="form__name_volunter"
                    onChange={handleChange}
                    placeholder="ФИО"
                />
                {errors.name && <div className="error-message">{errors.name}</div>}
            </div>
            <div className="feedback-form__item">
                <input
                    type="text"
                    name="phoneNumber"
                    value={data.phoneNumber}
                    className="form__input"
                    onChange={handleChange}
                    placeholder="Номер телефона"
                />
                {errors.phoneNumber && <div className="error-message">{errors.phoneNumber}</div>}
            </div>
            <div className="feedback-form__item">
                <input
                    className="form__input"
                    type="text"
                    name="problemDescription"
                    value={data.whom}
                    onChange={handleChange}
                    placeholder="Кому вы хотите помочь"
                />
                {errors.problemDescription && <div className="error-message">{errors.problemDescription}</div>}
            </div>
            <div className="feedback-form__item">
                <input
                    type="text"
                    name="location"
                    value={data.location}
                    className="form__input"
                    onChange={handleChange}
                    placeholder="Месторасположение"
                />
                {errors.location && <div className="error-message">{errors.location}</div>}
            </div>
            <div className="feedback-form__item">
                <input
                    type="text"
                    name="what"
                    value={data.location}
                    className="form__what"
                    onChange={handleChange}
                    placeholder="Какими ресурами вы можете пожертвовать"
                />
                {errors.location && <div className="error-message">{errors.location}</div>}
            </div>
            <button type="submit" className="feedback-form__button_volunter">
                Помочь
            </button>
        </form>
    );
};

export default VolunterForm;
