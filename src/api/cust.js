import fetch from '@/utils/fetch'

export function getCust (custid) {
  debugger;
  const data = {
    'contractRoot': {
      'tcpCont': {
        'svcCode': '1010010005',
        'appKey': 'CRM-Portal',
        'dstSysId': 'CustCenter',
        'transactionId': '1001000101201602021234567890',
        'sign': 'xxxxxxxxxxxxx',
        'version': '1.0',
        'menuId': '111'
      },
      'svcCont': {
        'authenticationInfo': {'sysUserId': '10001', 'sysUserPostId': '20001'},
        'requestObject': {
          'certType': '1',
          'certNum': custid,
          'custStatusCd': ['1000', '1100'],
          'pageInfo': {'pageIndex': '1', 'pageSize': '100'}
        }
      }
    }
  }
  return fetch({
    url: '/cust/qry',
    method: 'post',
    data
  })
}
