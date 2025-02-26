const SAMPLE_SIZE = 33
export const takeSnapshot = ({ data, ...rest }) => {
  const innerOffset = data.length / 2
  const baseline = {
    ...rest,
    data: [
      ...data.slice(0, SAMPLE_SIZE),
      ...data.slice(innerOffset, innerOffset + SAMPLE_SIZE),
      ...data.slice(-SAMPLE_SIZE),
    ],
  }
  return JSON.stringify(baseline)
}

const IMAGE_BASELINES = [
  {
    path: 'base/test/data/input/astronaut.zarr',
    baseline:
      '{"imageType":{"dimension":2,"pixelType":"VariableLengthVector","componentType":"float32","components":3},"origin":[0,0],"spacing":[1,1],"direction":{"0":1,"1":0,"2":0,"3":1},"size":[256,256],"data":[0.6908552050590515,0.6688187122344971,0.674207329750061,0.27221277356147766,0.2442161589860916,0.30864495038986206,0.04838373512029648,0.021947167813777924,0.11139355599880219,0.12586522102355957,0.08368028700351715,0.2073654979467392,0.29955506324768066,0.26995500922203064,0.3033413887023926,0.4970903694629669,0.46638235449790955,0.4774773120880127,0.6510546803474426,0.6293986439704895,0.6291141510009766,0.652686595916748,0.6369064450263977,0.6407243609428406,0.6563014984130859,0.645758330821991,0.6505763530731201,0.6664388179779053,0.6574797630310059,0.6628299951553345,0.6745269298553467,0.6657060384750366,0.6709856390953064,0.702728271484375,0.6728822588920593,0.6759136915206909,0.3145504593849182,0.27835237979888916,0.33366164565086365,0.12892097234725952,0.08835494518280029,0.16398540139198303,0.18125581741333008,0.09787159413099289,0.20692530274391174,0.32659101486206055,0.250407338142395,0.27853235602378845,0.5059590339660645,0.4235151708126068,0.41403526067733765,0.64797443151474,0.5656358003616333,0.5444427728652954,0.650419294834137,0.5713972449302673,0.5587600469589233,0.6266179084777832,0.5702376365661621,0.5665257573127747,0.6173701882362366,0.57239830493927,0.5740906596183777,0.6674000024795532,0.6029467582702637,0.594350278377533,1.0168959424516899e-11,1.3201037485366385e-11,7.667253984489086e-12,6.150961359176199e-13,6.375242673183068e-13,1.862368982988305e-12,2.6472281398209896e-13,2.687519803055982e-13,1.9147365442305497e-13,8.121141834103313e-15,7.599267894640993e-15,1.278036429805526e-14,1.6719174311674578e-7,1.4385383906301286e-7,1.528643451820244e-7,0.0015648636035621166,0.0013919497141614556,0.0013295512180775404,0.10193789750337601,0.09551996737718582,0.08835914731025696,0.20549945533275604,0.19322900474071503,0.15210646390914917,0.15297368168830872,0.13750818371772766,0.10394243896007538,0.22972600162029266,0.21356536448001862,0.18998141586780548,0.17018358409404755,0.15841108560562134,0.15074452757835388]}',
  },
  {
    path:
      'base/test/data/input/ome-ngff-prototypes/single_image/v0.4/cyx.ome.zarr',
    baseline:
      '{"imageType":{"dimension":2,"pixelType":"VariableLengthVector","componentType":"uint16","components":4},"name":"cyx","origin":[0,0],"spacing":[4,4],"direction":{"0":1,"1":0,"2":0,"3":1},"size":[256,232],"data":[539,2120,1266,1554,550,2170,1141,1607,539,2067,1118,1522,543,2103,995,1428,539,2176,1004,1684,549,2118,1006,1556,547,2290,984,1467,540,2097,1021,1478,542,574,3233,1303,1862,573,3283,1349,1990,583,3304,1329,2004,577,3384,1322,1881,587,3459,1420,2104,583,3419,1366,2012,582,3266,1441,2126,582,3366,1490,2007,585,1628,542,2608,1114,1568,548,2561,1043,1622,545,2563,1058,1580,550,2626,1108,1821,548,2514,1081,1647,542,2552,1112,1639,545,2506,1026,1599,549,2517,1027,1586]}',
  },
  {
    path:
      'base/test/data/input/ome-ngff-prototypes/single_image/v0.4/tczyx.ome.zarr',
    baseline:
      '{"imageType":{"dimension":3,"pixelType":"VariableLengthVector","componentType":"int16","components":2},"name":"tczyx","origin":[0,0,0],"spacing":[2.5999999046325684,2.5999999046325684,4],"direction":{"0":1,"1":0,"2":0,"3":0,"4":1,"5":0,"6":0,"7":0,"8":1},"size":[128,66,122],"data":[6,6,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}',
  },
  {
    path:
      'base/test/data/input/ome-ngff-prototypes/single_image/v0.4/zyx.ome.zarr',
    baseline:
      '{"imageType":{"dimension":3,"pixelType":"Scalar","componentType":"uint8","components":1},"name":"zyx","origin":[0,0,0],"spacing":[256,256,256],"direction":{"0":1,"1":0,"2":0,"3":0,"4":1,"5":0,"6":0,"7":0,"8":1},"size":[121,98,151],"data":[146,147,147,146,145,145,145,145,145,145,142,140,140,142,143,143,143,143,141,140,137,133,131,129,128,127,126,125,124,121,118,115,114,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,124,126,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}',
  },
  {
    path:
      'base/test/data/input/ome-ngff-prototypes/single_image/v0.1/zyx.ome.zarr',
    baseline:
      '{"imageType":{"dimension":3,"pixelType":"Scalar","componentType":"uint8","components":1},"name":"zyx","origin":[0,0,0],"spacing":[1,1,1],"direction":{"0":1,"1":0,"2":0,"3":0,"4":1,"5":0,"6":0,"7":0,"8":1},"size":[121,98,151],"data":[146,147,147,146,145,145,145,145,145,145,142,140,140,142,143,143,143,143,141,140,137,133,131,129,128,127,126,125,124,121,118,115,114,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,124,126,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}',
  },
  {
    path:
      'base/test/data/input/ome-ngff-prototypes/single_image/v0.1/tczyx.ome.zarr',
    baseline:
      '{"imageType":{"dimension":3,"pixelType":"VariableLengthVector","componentType":"int16","components":2},"name":"tczyx","origin":[0,0,0],"spacing":[1,1,1],"direction":{"0":1,"1":0,"2":0,"3":0,"4":1,"5":0,"6":0,"7":0,"8":1},"size":[128,66,122],"data":[6,6,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}',
  },
  {
    path:
      'base/test/data/input/ome-ngff-prototypes/single_image/v0.1/cyx.ome.zarr',
    baseline:
      '{"imageType":{"dimension":2,"pixelType":"VariableLengthVector","componentType":"uint16","components":4},"name":"cyx","origin":[0,0],"spacing":[1,1],"direction":{"0":1,"1":0,"2":0,"3":1},"size":[256,232],"data":[539,2120,1266,1554,550,2170,1141,1607,539,2067,1118,1522,543,2103,995,1428,539,2176,1004,1684,549,2118,1006,1556,547,2290,984,1467,540,2097,1021,1478,542,574,3233,1303,1862,573,3283,1349,1990,583,3304,1329,2004,577,3384,1322,1881,587,3459,1420,2104,583,3419,1366,2012,582,3266,1441,2126,582,3366,1490,2007,585,1628,542,2608,1114,1568,548,2561,1043,1622,545,2563,1058,1580,550,2626,1108,1821,548,2514,1081,1647,542,2552,1112,1639,545,2506,1026,1599,549,2517,1027,1586]}',
  },
  {
    path:
      'base/test/data/input/ome-ngff-prototypes/single_image/v0.4/yx.ome.zarr',
    baseline:
      '{"imageType":{"dimension":2,"pixelType":"Scalar","componentType":"uint16","components":1},"name":"yx","origin":[0,0],"spacing":[4,4],"direction":{"0":1,"1":0,"2":0,"3":1},"size":[256,232],"data":[539,550,539,543,539,549,547,540,542,537,540,541,532,548,543,543,541,545,540,543,546,544,545,545,548,553,544,549,546,545,551,547,553,574,573,583,577,587,583,582,582,585,594,584,584,585,594,583,597,598,596,598,592,593,588,597,598,598,598,608,607,600,592,612,599,607,570,560,555,554,558,561,553,554,557,550,554,566,553,546,554,544,555,548,550,542,551,549,548,549,553,542,548,545,550,548,542,545,549]}',
  },
  {
    path: 'base/test/data/input/idr/5025551.zarr',
    baseline:
      '{"imageType":{"dimension":2,"pixelType":"VariableLengthVector","componentType":"uint8","components":27},"origin":[0,0],"spacing":[16,16],"direction":{"0":1,"1":0,"2":0,"3":1},"size":[168,168],"data":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,22,29,0,0,0,0,0,0,0,56,0,0,0,0,0,55,0,42,30,36,0,46,0,6,4,23,212,28,0,0,0,0,0,197,0,119,16,145,0,0,7,0,0,0,0,17,0,0,0,0,0,0,0,85,83,0,0,60,36,0,0,0,156,1,151,0]}',
  },
]

const RESOURCE_ERROR_CAUSING_DOCKER = [
  {
    path: 'base/test/data/input/idr/6001240.zarr',
    baseline:
      '{"imageType":{"dimension":3,"pixelType":"VariableLengthVector","componentType":"uint16","components":2},"origin":[0,0,0],"spacing":[1,1,1],"direction":{"0":1,"1":0,"2":0,"3":0,"4":1,"5":0,"6":0,"7":0,"8":1},"size":[67,68,236],"data":[8,28,8,28,9,27,9,28,9,27,9,27,10,29,9,27,9,28,9,26,10,28,9,26,8,27,9,28,10,26,7,27,10,8,27,8,31,9,28,10,28,8,27,9,28,8,28,10,27,19,28,68,27,23,29,9,26,9,27,7,27,8,28,8,27,8,37,9,28,9,34,23,44,7,27,8,31,9,28,10,28,9,28,7,28,9,27,8,39,7,28,8,27,9,34,8,30,9,45]}',
  },
  {
    path: 'base/test/data/input/idr/6001240_v3.zarr',
    baseline:
      '{"imageType":{"dimension":3,"pixelType":"VariableLengthVector","componentType":"uint16","components":2},"origin":[0,0,0],"spacing":[1,1,1],"direction":{"0":1,"1":0,"2":0,"3":0,"4":1,"5":0,"6":0,"7":0,"8":1},"size":[67,68,236],"data":[8,28,8,28,9,27,9,28,9,27,9,27,10,29,9,27,9,28,9,26,10,28,9,26,8,27,9,28,10,26,7,27,10,8,27,8,31,9,28,10,28,8,27,9,28,8,28,10,27,19,28,68,27,23,29,9,26,9,27,7,27,8,28,8,27,8,37,9,28,9,34,23,44,7,27,8,31,9,28,10,28,9,28,7,28,9,27,8,39,7,28,8,27,9,34,8,30,9,45]}',
  },
]

export const getBaselines = () =>
  // eslint-disable-next-line no-undef
  __karma__.config.args.includes('--dockered')
    ? IMAGE_BASELINES
    : [...IMAGE_BASELINES, ...RESOURCE_ERROR_CAUSING_DOCKER]
