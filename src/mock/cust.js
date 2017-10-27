import { param2Obj } from '@/utils'

const cust = {
  'contractRoot': {
    'tcpCont': null,
    'svcCont': {
      'resultCode': '0',
      'resultMsg': '查询客户列表成功',
      'respObject': {
        'customers': [{
          'actType': null,
          'custId': 110000860603,
          'partyId': 100000043162,
          'taxPayerId': 1,
          'custName': '崔志生',
          'custNumber': '2351153591721000',
          'custAddr': '山西省太原市杏花岭区府东街16号2号楼3单元402户',
          'regionId': 1401,
          'custType': '1199',
          'custSubType': '999999999',
          'custSourceId': 221046,
          'custAreaGrade': '1100',
          'enterDate': '20120429110048',
          'industryTypeId': null,
          'extCustId': null,
          'distributorId': null,
          'secrecyLev': '1000',
          'custOrderId': 1,
          'custControlLevel': null,
          'isInstead': 1,
          'isRealname': 1,
          'statusCd': '1100',
          'statusDate': '20120504165242',
          'createStaff': 23319,
          'createDate': '20120429110048',
          'updateStaff': 11,
          'updateDate': '20120504165242',
          'lastOrderItemId': 1,
          'remark': null,
          'custTypeForAccNum': null,
          'custTypeValue': '',
          'custSubTypeValue': '',
          'custAreaGradeValue': '省级',
          'industryTypeIdValue': '',
          'secrecyLevValue': '公开',
          'isInsteadValue': '是',
          'isRealnameValue': '是',
          'custControlLevelValue': '',
          'statusCdValue': '在网',
          'certType': '1',
          'certNum': '142331195009200014',
          'certTypeValue': '居民身份证'
        }],
        'pageInfo': null
      }
    }
  }
}

export default {
  getCust: () => {
    return cust
  },
}
