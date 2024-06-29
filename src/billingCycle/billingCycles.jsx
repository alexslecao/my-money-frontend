import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";
import Tabs from "../common/tab/tabs";
import TabsHeader from "../common/tab/tabsHeader";
import TabsContent from "../common/tab/tabsContent";
import TabHeader from "../common/tab/tabHeader";
import TabContent from "../common/tab/tabContent";
import { selectTab, showTabs } from "../common/tab/tabActions";
import { getList } from "./billingCycleActions";

class BillingCycle extends Component {
    componentWillMount() {
        this.props.selectTab('tabList');
        this.props.showTabs('tabList', 'tabCreate');

        this.props.getList();
    }
    
    render() {
        //console.log(this.props.billingCycleList);
        return (
            <div>
                <ContentHeader title="Ciclo de Pagamento" small="Cadastro" />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label="Listar" icon="bars" target="tabList" />
                            <TabHeader label="Incluir" icon="plus" target="tabCreate" />
                            <TabHeader label="Alterar" icon="pencil" target="tabUpdate" />
                            <TabHeader label="Excluir" icon="trash-o" target="tabDelete" />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id="tabList"><h1>Listar</h1></TabContent>
                            <TabContent id="tabCreate"><h1>Incluir</h1></TabContent>
                            <TabContent id="tabUpdate"><h1>Alterar</h1></TabContent>
                            <TabContent id="tabDelete"><h1>Excluir</h1></TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    billingCycleList: state.billingCycle
});

const mapDispatchToProps = dispatch => bindActionCreators({ selectTab, showTabs, getList }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycle);