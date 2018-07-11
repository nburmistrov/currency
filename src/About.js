import React, {Component} from 'react';
import * as UI from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon28Message from '@vkontakte/icons/dist/28/message';
import {connect} from 'react-redux';
import {goBack} from 'react-router-redux';

class About extends Component {

    render() {
        const osname = UI.platform();

        return (
            <UI.Root activeView="main">
                <UI.View id="main" activePanel="mainPanel">
                    <UI.Panel id="mainPanel">
                        <UI.PanelHeader
                            left={<UI.HeaderButton onClick={this.navigationBack.bind(this)}>{osname === UI.IOS ?
                                <Icon28ChevronBack/> :
                                <Icon24Back/>}</UI.HeaderButton>}
                        >
                            <UI.PanelHeaderContent>
                                О программе
                            </UI.PanelHeaderContent>
                        </UI.PanelHeader>
                        <UI.Button type="cell" align="center" component="a" href="https://vk.me/currency_app"
                                   before={<Icon28Message/>}>Написать сообщение</UI.Button>
                        <UI.Group title="Исходный код">
                            <UI.Div>
                                Исходный код доступен на <a href="https://github.com/tsivarev/currency"
                                                       title="Github">GitHub</a>.
                                <br/>
                                <br/>
                                Документация <a href="https://vk.com/dev/vk_apps_docs">VK Apps платформы</a>.
                            </UI.Div>
                        </UI.Group>
                        <UI.Group title="Используемые ресурсы">
                            <UI.List>
                                <UI.ListItem multiline>
                                    Иконки – <a href="https://www.flaticon.com/authors/smashicons"
                                                title="Smashicons">Smashicons</a>. Лицензия <a
                                    href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC
                                    3.0 BY</a>.
                                </UI.ListItem>
                                <UI.ListItem multiline>
                                    Курсы ЦБ РФ – <a href="https://www.cbr-xml-daily.ru/">API</a>.
                                </UI.ListItem>
                                <UI.ListItem multiline>
                                    Курс USD/EUR – <a href="https://free.currencyconverterapi.com/">API</a>.
                                </UI.ListItem>
                            </UI.List>
                        </UI.Group>
                    </UI.Panel>
                </UI.View>
            </UI.Root>
        );
    }

    navigationBack() {
        this.props.dispatch(goBack());
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(About);
