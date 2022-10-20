==================
For Visit Report :
==================
Date
State --> Get State By user Id  --> http://localhost:4000/users/getAllottedStates
City --> Get City by State ID  ---> http://localhost:4000/state/getCity/0
Area --> Get Area by City id  --->   http://localhost:4000/state/getArea/1  
Account Name --> get Account Name by City id --->  http://localhost:4000/account/getAccountByCity/1
Client Name --> Get Client Name by account id -->  http://localhost:4000/client/getClient/8
realted User --> get Related user with same role --> http://localhost:4000/users/relatedUser

save visit---> http://localhost:4000/visit/addvisit
get Visit ---> http://localhost:4000/visit/getAllVisit

==============================================================================================================

================
For Tour Report:
================
select year and Month
State --> Get State By user Id  --> http://localhost:4000/users/getAllottedStates
City --> Get City by State ID  ---> http://localhost:4000/state/getCity/0
Account Name --> get Account Name by City id --->  http://localhost:4000/account/getAccountByCity/1
(Working With) realted User --> get Related user with same role --> http://localhost:4000/users/relatedUser

save Tour ----> http://localhost:4000/tour/addTour

===============================================================================================================

===============
Account
===============

Account Name ---> Name
State ---> get All State ---> http://localhost:4000/state/getState
City --> Get City by State ID  ---> http://localhost:4000/state/getCity/0
Area --> Get Area by City id  --->   http://localhost:4000/state/getArea/1  
phone-->
Email -->
Category-->
account_category
account_type
technician
cxo
purchase    
distributor
active

================================================================================================================


product_indication:{ type: DataTypes.STRING, allowNull: false },	
        maintainance:{ type: DataTypes.BOOLEAN, allowNull: false },	
        pitch:{ type:  DataTypes.BOOLEAN, allowNull: false},	
        quatation:{ type: DataTypes.BOOLEAN, allowNull: false },	
        negotiation:{ type: DataTypes.BOOLEAN, allowNull: false },	
        approval:{ type: DataTypes.BOOLEAN, allowNull: false },	
        unit:{ type: DataTypes.INTEGER, allowNull: false },
        scientific:{ type: DataTypes.STRING, allowNull: true },
        other:{ type: DataTypes.STRING, allowNull: true },
        comment:{ type: DataTypes.STRING, allowNull: true }

        {
    "product_name": "Parleji",
    "product_indication": "",
    "maintainance": 1,
    "pitch": 0,
    "quatation": 0,
    "negotiation": 0,
    "approval": 0,
    "unit": 10,
    "scientific": "CME",
    "other": "issue",
    "comment": "anything"
}