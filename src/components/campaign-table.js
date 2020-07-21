import React from 'react';
import Paper from '@material-ui/core/Paper';
import CampaignRow from './camp-row';
import { useTranslation } from 'react-i18next';

export default function ReactVirtualizedTable(props) {
    const { t } = useTranslation();

    return (
        <Paper style={{ overflow: 'hidden' }}>
            {props.Items && props.Items.length ?
                <div className="table-header">
                    <div className='table-header-item table-header-item-date'>{t('Date')}</div>
                    <div className='table-header-item table-header-item-campaign'>{t('CAMPAIGN')}</div>
                    <div className='table-header-item table-header-item-width'>{t('VIEW')}</div>
                    <div className='table-header-item table-header-item-width'>{t('ACTIONS')}</div>
                    {props.Items.map(element => <CampaignRow Item={element} Callback={props.Callback} />)}
                </div>
                : t('No Records Found!')}
        </Paper>
    );
}