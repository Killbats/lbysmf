import React, { Component } from 'react';
import { graphql, Mutation, compose } from 'react-apollo';
import gql from 'graphql-tag';
import _ from 'underscore';
// import update from 'react-addons-update';
require('./LbsLandingPageList.css');

class LbsLandingPagesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            title: "",
        }
    }

    // handleKeyUp = (evt) => {
    //     if (evt.keyCode === 13) {
    //         evt.persist();
    //         if (this.state.id !== "") {
    //             this.props.updateChannelMutation({
    //                 variables: {
    //                     name: evt.target.value,
    //                     id: this.state.id
    //                 },
    //             }).then((data) => {
    //                 evt.target.value = '';
    //             });
    //             this.setState({
    //                 id: ""
    //             })
    //         } else {
    //             this.props.createChannelMutation({
    //                 variables: {
    //                     name: evt.target.value
    //                 },
    //             }).then((data) => {
    //                 evt.target.value = '';
    //             });
    //         }
    //     };
    // }


    componentWillMount() {
        // this.props.data.subscribeToMore({
        //     document: addChannelSubscription,  // Use the subscription
        //     updateQuery: (prev, { subscriptionData }) => {
        //         if (!subscriptionData.data) {
        //             return prev;
        //         }
        //         const newChannel = subscriptionData.data.subscriptionChannelAdded;
        //         // Add check to prevent double adding of channels.
        //         if (!prev.channels.find((channel) => channel.id === newChannel.id)) {
        //             let updatedChannels = Object.assign({}, prev, { channels: [...prev.channels, newChannel] });
        //             return updatedChannels;
        //         } else {
        //             return prev;
        //         }
        //     }
        // });
        // this.props.data.subscribeToMore({
        //     document: deleteChannelSubscription,  // Use the subscription
        //     updateQuery: (prev, { subscriptionData }) => {
        //         if (!subscriptionData.data) {
        //             return prev;
        //         }
        //         const newChannel = subscriptionData.data.subscriptionChannelDeleted;
        //         const deleteIndex = _.findIndex(prev.channels, (item) => item.id === newChannel.id);
        //         if (deleteIndex < 0) {
        //             return prev;
        //         }
        //         return update(prev, {
        //             channels: {
        //                 $splice: [[deleteIndex, 1]]
        //             }
        //         });
        //     }
        // });
        // this.props.data.subscribeToMore({
        //     document: updateChannelSubscription,  // Use the subscription
        //     updateQuery: (prev, { subscriptionData }) => {
        //         if (!subscriptionData.data) {
        //             return prev;
        //         }
        //     }
        // });
    }

    // onEditClick = (ch) => {
    //     this.setState({
    //         nameValue: ch.name,
    //         id: ch.id
    //     });
    // }
    onChangeFunc = (event) => {
        this.setState({
            nameValue: event.target.value
        })
    }
    render() {
        const { data: { loading, error, lbsLandingPages } } = this.props;
        if (loading) {
            return <p>Loading ...</p>;
        }
        if (error) {
            return <p>{error.message}</p>;
        }
        console.log(lbsLandingPages);
        return (
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-md-8">
                        <center><h3 className="main-title">lbsLandingPages List</h3></center>
                        <hr />
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Channel"
                                onKeyUp={this.handleKeyUp}
                                value={this.state.title}
                                onChange={this.onChangeFunc} />
                        </div>
                        <ul className="list-group">
                            {lbsLandingPages.map(ch =>
                                <li key={"div_" + ch.id} className="list-group-item">
                                    <label htmlFor="checkbox5">
                                        {ch.partner} : {ch.title} : {ch.planType}
                                    </label>
                                    <div className="pull-right action-buttons">
                                        {/* <a onClick={() => this.onEditClick(ch)} href="javascript:void(0)"><span className="fa fa-pencil"></span></a>

                                        <Mutation mutation={deleteChannel} >
                                            {(deleteChannelMutation, { data }) => (
                                                <a className="trash" href="javascript:void(0)" onClick={() => { deleteChannelMutation({ variables: { id: ch.id } }); }}><span className="fa fa-trash"></span></a>

                                            )}
                                        </Mutation> */}
                                    </div>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
       
        )

    }

}

export const lbsLandingPagesListQuery = gql`
    query LbsLandingPagesListQuery {
        lbsLandingPages(id: "5cbd339a199c68a6f0afb3bd"){
            id
            title
            partner
            planType
            # // PageType : v1.LbsLandingPage_VIDEO,
            previewUrl
            lpUrl 
            banners 
            description
            rating  
            likes 
            buyOption {
                idOption
                planName
                planDesc
                smsData {
                    shortCode
                    smsKey
                }
                    price
                currency
            }
            # // google.protobuf.Timestamp StartTime = 9 [(tagger.tags) = "bson:\"date\"" ];
            # // google.protobuf.Timestamp EndTime = 10 [(tagger.tags) = "bson:\"date\"" ];
            # // CreatedAt : r.CreatedAt,
            createdBy 
            # // google.protobuf.Timestamp UpdatedAt = 13 [(tagger.tags) = "bson:\"date\"" ];
            # // UpdatedBy = 14;
            isActive 
            isValidPeriod 
        }       
    }
`;

// const addChannelSubscription = gql`
//     subscription Channels {
//      subscriptionChannelAdded {
//        id
//        name
//      }
//     }
// `

// const deleteChannelSubscription = gql`
//     subscription Channels {
//      subscriptionChannelDeleted {
//        id
//        name
//      }
//     }
// `
// const updateChannelSubscription = gql`
//     subscription Channels {
//      subscriptionChannelUpdated {
//        id
//        name
//      }
//     }
// `
// const deleteChannel = gql`
//   mutation deleteChannelMutation($id: Int!) {
//     deleteChannel(ID: $id) {
//       id
//       name
//     }
//   }
// `;

// const updateChannel = gql`
//   mutation updateChannelMutation($id: Int!,$name:String!) {
//     updateChannel(id: $id,name:$name) {
//       id
//       name
//     }
//   }
// `;

const CreateLbsLandingPageMutation = gql`
  mutation createLbsLandingPage($lbsLandingPage: LbsLandingPageInput!) {
    # createLbsLandingPage(name: $name) {
    #   id
    #   name
    # }

    createLbsLandingPage(
        lbsLandingPage: {
            title : "GraphQL in the dawn #fromReact",
                partner: "HOOQ",
                planType: "Specific",
                previewUrl : "life.smartfren.com/video",
                lpUrl : "life.smartfren.com/video",
                banners : "AMB_1Sheet_Dom_Duo_900x450.jpg, COCO_900x600.jpg, Lovely_Horribly_1592x1124.jpg, My_ID_is_Gangnam_Beauty_180704.jpg,",
                description : "GraphQL communicate to grpc. Thank God",
                rating : 7.5,
                likes : 100,
                buyOption: [
                    {
                                idOption : 1,
                                planName : "Daily",
                                planDesc : "HOOQ 1 day subscription +300 MB Quota",
                                price : 3000.00,
                                currency : "IDR",
                                smsData : [
                                    {
                                        shortCode : 123, 
                                        smsKey : "HOOQSF1",
                                    },
                    ],
                            },
                            {
                                idOption : 2,
                                planName : "Weekly",
                                planDesc : "HOOQ 1 week subscription + 300 MB Quota ",
                                price : 10000.00,
                                currency : "IDR",
                                smsData :[
                                    {
                                        shortCode : 123, 
                                        smsKey : "HOOQSF7",
                                    },
                    ],
                            },
                ],
                createdBy: "kenanya with God help",
                isActive: true,
                isValidPeriod: true,
            }
    ) {
        id
        title
        partner
        planType
        createdBy        
    }
  }
`;
const multipleMutation = compose(
    graphql(CreateLbsLandingPageMutation, { name: 'createLbsLandingPageMutation' }),
    // graphql(updateChannel, { name: 'updateChannelMutation' })
)

export default compose(multipleMutation, graphql(lbsLandingPagesListQuery))(LbsLandingPagesList);