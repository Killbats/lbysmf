import {gql} from 'apollo-boost';

const lbsLandingPagesList = gql`
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


export {lbsLandingPagesList};