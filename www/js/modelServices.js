/* globals angular */

'use strict';

angular.module('model.services',[])
.factory('ServerModel',function(){
	return {
		getMemberProfile: function(memberId){
			var member = {
				memberId: memberId, 
				firstName: 'Eric', 
				lastName: 'Yu',
				email:'eric.yu@testritegroup.com',
				avaterImage: ''   //path
			};
			return member;
		},
		getGreatHelpers: function(){
			var greatHelpers =[
			    { 	firstName: 'Eric',
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
			    { 	firstName: 'Ken',
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
		}
	}; //return
});