import { Button, Fade, Paper, ClickAwayListener, MenuItem } from '@material-ui/core';
import { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';

// import { LANG_UA, LANG_RU, LANG_EN } from '../../../../consts/generalConsts';
import { AppContext } from '../../../../contexts/contexts';
import { CHANGE_LANG } from '../../../../redux/actions/actions';
import languages from '../../../../dictionary/lang';

// import classnames from 'classnames';

const Language = () => {
    // const [anchorEl, setAnchor] = useState(null);
    const [opened, setOpened] = useState(null);
    const { lang } = useContext(AppContext);
    const dispatch = useDispatch();

    const setLang = (newLang) => {
        setOpened(false);
        dispatch(CHANGE_LANG(newLang));
    };

    const caption = key => dict.translate(`common.${ key }`, lang);

    return (
        <ClickAwayListener onClickAway={ () => setOpened(false) }>
            <div className='language_container'>
                <Button
                    className='language_btn'
                    aria-controls='lang_menu'
                    aria-haspopup='true'
                    onClick={ () => setOpened(true) }
                >
                    {caption(lang)}
                </Button>
                <Fade in={ opened } timeout={ 0.6 }>
                    <Paper className='language_board'>
                        {
                            _.map(languages, (_, key) => (
                                <MenuItem
                                    className='btn_language'
                                    // classes={ { label: 'lang_label' } }
                                    onClick={ () => setLang(key) }
                                    key={ key }
                                    dense
                                >
                                    {caption(key)}
                                </MenuItem>
                            ))
                        }
                    </Paper>
                </Fade>
            </div>
        </ClickAwayListener>
    );
};

Language.propTypes = {
    //
};

Language.defaultProps = {};

export default Language;
