import 'date-fns';
import React from 'react';
import moment from 'moment';
import Modal from '@material-ui/core/Modal';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { useTranslation } from 'react-i18next';

export default function CampaignRow(props) {
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const [value, setValue] = React.useState(false);
    const [datePop, datePopSetValue] = React.useState(false);
    const [modelValue, setModalValue] = React.useState({});
    const { t } = useTranslation();
    function daysAgo(timeStamp) {
        let days = moment((new Date(timeStamp)).toUTCString()).diff(moment(), 'days');
        let result = ''
        if (days > 1)
            result = days + t(' Days Ahead');
        else if (days < 1)
            result = Math.abs(days) + t(' Days Ago')
        return result;
    }

    const handleDateChange = date => {
        setSelectedDate(date);
    };

    function updateDate(item) {
        item.createdOn = new Date(selectedDate).getTime();
        props.Callback(item);
        datePopSetValue(false)
    }

    function pricingPopUp(item) {
        setModalValue(item)
        setValue(true)
    }
    function closeModal() {
        setModalValue({})
        setValue(false)
    }
    return (
        <div>

            <div className='table-row'>
                <div className='table-row-set row-first'>
                    <span className='pos-abso row-date-text'>{t((moment((new Date(props.Item.createdOn)).toUTCString()).format("MMM"))) + (moment((new Date(props.Item.createdOn)).toUTCString()).format(" YYYY, DD"))}</span>
                    <span className='pos-abso row-text-small row-date-small-text'>{daysAgo(props.Item.createdOn)}</span>
                </div>
                <div className='table-row-set row-secound'>
                    <img className='pos-abso row-img-large' src={props.Item.image_url} alt='campaign-img' />
                    <span className="pos-abso row-text-secound">{t(props.Item.name)}</span>
                    <span className='pos-abso row-text-small row-camp-small-text'>{props.Item.region}</span>
                </div>
                <div className='table-row-set row-view' onClick={() => pricingPopUp(props.Item)}>
                    <img className="pos-abso row-img-small" src={'/images/Price.png'} alt='price' />
                    <span className='pos-abso row-font-size-colour row-text-top row-text-left-pricing'>{t('View Pricing')}</span>
                </div>
                <div className='table-row-set row-csv'>
                    <img className="pos-abso row-img-small" src={'/images/file.png'} alt='price' />
                    <span className='pos-abso row-font-size-colour row-text-top row-csv-left'>{t('CSV')}</span>
                </div>
                <div className='table-row-set row-report-div'>
                    <img className="pos-abso row-img-small" src={'/images/report.png'} alt='price' />
                    <span className='pos-abso row-font-size-colour row-text-top row-report'>{t('Report')}</span>
                </div>
                <div className='table-row-set row-schedule' onClick={() => datePopSetValue(true)}>
                    <img className="pos-abso row-img-small" src={'/images/calendar.png'} alt='price' />
                    <span className='pos-abso row-font-size-colour row-text-top row-report'>{t('Schedule Again')}</span>
                </div>
                <div className="bottom-line"></div>
            </div>

            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                closeAfterTransition
                open={value}
            >
                <div className='model-main'>
                    <div className='model-first-div'>
                        <img className='model-img' src={modelValue.image_url} alt='campaign-img' />
                        <span className='model-name'>{t(modelValue.name)}</span>
                        <span className='model-region'>{modelValue.region}</span>
                    </div>
                    <div className='model-secound-div'>
                        <div className='model-pricing-text'>{t('Pricing')}</div>
                        <div className='model-pricing-text-first'><span>1 {t('Week')} - 1 {t('Month')}</span><span className='model-rate-text'>$100.00</span></div>
                        <div className='model-pricing-text-first'><span>6 {t('Months')}</span><span className='model-rate-text'>$500.00</span></div>
                        <div className='model-pricing-text-first'><span>1 {t('Year')}</span><span className='model-rate-text'>$900.00</span></div>
                    </div>
                    <div className='model-close-div'><div className='model-close-button' onClick={closeModal}>{t('Close')}</div> </div>
                </div>
            </Modal>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                closeAfterTransition
                open={datePop}
            >
                <div className='date-model'>
                    <span className='date-model-close-sign' onClick={() => datePopSetValue(false)}>X</span>
                    <div className='date-mode-selecter'>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label={t("Schedule Again")}
                                value={moment((new Date(props.Item.createdOn)).toUTCString()).format("MM/DD/YYYY")}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                    </div>
                    <div className='model-close-div date-model-close'><div className='model-close-button' onClick={() => updateDate(props.Item)}>{t('Save')}</div> </div>
                </div>
            </Modal>
        </div>
    )
}