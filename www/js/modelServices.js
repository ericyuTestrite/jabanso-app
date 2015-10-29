/* globals angular */

'use strict';

angular.module('model.services',[])
.factory('ServerModel',function(){
	return {
		getMemberProfile: function(memberId){
			var member = {
				memberId: 10001,  //varchar
				firstName: 'Eric',  //varchar
				lastName: 'Yu', //varchar
				email:'eric.yu@testritegroup.com', //varchar
				avaterImage: '', //varchar
				favories: [{ 
						helperId: 5678  // long
				}]
			};
			return member;
		},
		getGreatHelpers: function(){
			var greatHelpers =[
			    {	helperId: 1234,
			     	firstName: 'Eric',
					lastName: 'Yu',
					avatarImage: 'img/helper1.jpg',
					registrationDate: '2015-9-18',
					advertiseImg: 'img/banner1.jpg',
					serviceDesc: '行李箱開鎖, 行李箱滾輪加油修鞋、擦皮鞋、洗鞋修包、洗包,另配鑰匙(行李箱、家、車、捲簾門、櫥櫃等)',
					serviceGeo: [192.29929292,121.29929292],
					comments: [ 
						{rating: 5,
						comments: 'Great Helper'}
					],
					starCount: 1
			    },
			    { 	helperId: 5678,
			     	firstName: 'Ken',
					lastName: 'Chang',
					avatarImage: 'img/helper2.jpg',
					registrationDate: '2015-8-18',
					advertiseImg: 'img/banner2.jpg',
					serviceDesc: '行李箱開鎖, 行李箱滾輪加油修鞋、擦皮鞋、洗鞋修包、洗包,另配鑰匙(行李箱、家、車、捲簾門、櫥櫃等)',
					serviceGeo: [192.29929292,121.29929292],
					comments: [ 
						{rating: 5,
						comments: 'Great Helper'}
					],
					starCount: 1
			    }
			];
			return greatHelpers;
		},
		getMyRequirement: function(){
			var myRequirement = [{
				reqId: 4444,
				memberId: 10001,
				content: '', //varchar
				createDate: '2015-10-23 10:00:23',
				implementPlanDate: '2015-10-23',
				implementPlace: '台北市新湖三路....',
				implementGeo: [192.29929292,121.29929292],
				budget: 20000,
				status: 'Processing' // 提出
			}];
			return myRequirement;
		},
		postRequirement: function(req){
			return true;
		},

		getMyDeal: function(){
			var deals = [{
					dealId: 5555,
					memberId: 10001,
					helperId: 1234,
					implementPlanDate: '2015-10-23 10:00:23', 
					status: '',  //預約/確認//完成
					implement:[{
						implementDate: '2015-10-23 10:00:23',
						implementPhotos: [{implementImage: 'dddd.jpg'}]
					}],
					memberComments: '師傅太專業了!'
			}];
			return deals;
		}
	}; //return
});