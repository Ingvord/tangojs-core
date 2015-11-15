
// ----------------------------------------------------------------------------
// GENERATED BY idl2js v0.1.0
// source: tango.idl
// sha1: FAC639948890BBB440459C465C4946E5A05BA0ED
// date: 2015-11-14T18:50:32.412
// ----------------------------------------------------------------------------

function EnumConstant(key, value) {
  return Object.freeze({key, value})
}

function Enum(mapping) {

  let constants = Object.keys(mapping).reduce(
    (acc, key) => (acc[key] = EnumConstant(key, mapping[key]), acc),
    {})

  let reverseMapping = Object.keys(mapping).reduce(
    (acc, key) => (acc[mapping[key]] = constants[key], acc),
    {})

  constants.fromValue = (value) => reverseMapping[value]

  return Object.freeze(constants)
}

// ----------------------------------------------------------------------------

/**
 * @typedef {AttrQuality[]} AttrQualityList
 */

/**
 * @typedef {AttributeConfig[]} AttributeConfigList
 */

/**
 * @typedef {AttributeConfig_2[]} AttributeConfigList_2
 */

/**
 * @typedef {AttributeConfig_3[]} AttributeConfigList_3
 */

/**
 * @typedef {AttributeConfig_5[]} AttributeConfigList_5
 */

/**
 * @typedef {AttributeDim[]} AttributeDimList
 */

/**
 * @typedef {AttributeValue[]} AttributeValueList
 */

/**
 * @typedef {AttributeValue_3[]} AttributeValueList_3
 */

/**
 * @typedef {AttributeValue_4[]} AttributeValueList_4
 */

/**
 * @typedef {AttributeValue_5[]} AttributeValueList_5
 */

/**
 * @typedef {number} CppClntIdent
 */

/**
 * @typedef {DevAttrHistory[]} DevAttrHistoryList
 */

/**
 * @typedef {DevAttrHistory_3[]} DevAttrHistoryList_3
 */

/**
 * @typedef {boolean} DevBoolean
 */

/**
 * @typedef {DevCmdHistory[]} DevCmdHistoryList
 */

/**
 * @typedef {DevCmdInfo[]} DevCmdInfoList
 */

/**
 * @typedef {DevCmdInfo_2[]} DevCmdInfoList_2
 */

/**
 * @typedef {number} DevDouble
 */

/**
 * @typedef {DevError[]} DevErrorList
 */

/**
 * @typedef {DevError[][]} DevErrorListList
 */

/**
 * @typedef {number} DevFloat
 */

/**
 * @typedef {number} DevLong
 */

/**
 * @typedef {number} DevLong64
 */

/**
 * @typedef {number} DevShort
 */

/**
 * @typedef {string} DevString
 */

/**
 * @typedef {number} DevUChar
 */

/**
 * @typedef {number} DevULong
 */

/**
 * @typedef {number} DevULong64
 */

/**
 * @typedef {number} DevUShort
 */

/**
 * @typedef {boolean[]} DevVarBooleanArray
 */

/**
 * @typedef {number[]} DevVarCharArray
 */

/**
 * @typedef {number[]} DevVarDoubleArray
 */

/**
 * @typedef {DevEncoded[]} DevVarEncodedArray
 */

/**
 * @typedef {number[]} DevVarFloatArray
 */

/**
 * @typedef {number[]} DevVarLong64Array
 */

/**
 * @typedef {number[]} DevVarLongArray
 */

/**
 * @typedef {DevPipeDataElt[]} DevVarPipeDataEltArray
 */

/**
 * @typedef {number[]} DevVarShortArray
 */

/**
 * @typedef {DevState[]} DevVarStateArray
 */

/**
 * @typedef {string[]} DevVarStringArray
 */

/**
 * @typedef {number[]} DevVarULong64Array
 */

/**
 * @typedef {number[]} DevVarULongArray
 */

/**
 * @typedef {number[]} DevVarUShortArray
 */

/**
 * @typedef {EltInArray[]} EltInArrayList
 */

/**
 * @typedef {number[]} JavaUUID
 */

/**
 * @typedef {NamedDevError[]} NamedDevErrorList
 */

/**
 * @typedef {PipeConfig[]} PipeConfigList
 */

/**
 * @typedef {TimeVal[]} TimeValList
 */

/**
 * @type {Object}
 * @public
 */
export const AttrDataFormat = Enum({
  SCALAR: 0,
  SPECTRUM: 1,
  IMAGE: 2,
  FMT_UNKNOWN: 3
})

/**
 * @type {Object}
 * @public
 */
export const AttrQuality = Enum({
  ATTR_VALID: 0,
  ATTR_INVALID: 1,
  ATTR_ALARM: 2,
  ATTR_CHANGING: 3,
  ATTR_WARNING: 4
})

/**
 * @type {Object}
 * @public
 */
export const AttrWriteType = Enum({
  READ: 0,
  READ_WITH_WRITE: 1,
  WRITE: 2,
  READ_WRITE: 3,
  WT_UNKNOWN: 4
})

/**
 * @type {Object}
 * @public
 */
export const AttributeDataType = Enum({
  ATT_BOOL: 0,
  ATT_SHORT: 1,
  ATT_LONG: 2,
  ATT_LONG64: 3,
  ATT_FLOAT: 4,
  ATT_DOUBLE: 5,
  ATT_UCHAR: 6,
  ATT_USHORT: 7,
  ATT_ULONG: 8,
  ATT_ULONG64: 9,
  ATT_STRING: 10,
  ATT_STATE: 11,
  DEVICE_STATE: 12,
  ATT_ENCODED: 13,
  ATT_NO_DATA: 14
})

/**
 * @type {Object}
 * @public
 */
export const DevSource = Enum({
  DEV: 0,
  CACHE: 1,
  CACHE_DEV: 2
})

/**
 * @type {Object}
 * @public
 */
export const DevState = Enum({
  ON: 0,
  OFF: 1,
  CLOSE: 2,
  OPEN: 3,
  INSERT: 4,
  EXTRACT: 5,
  MOVING: 6,
  STANDBY: 7,
  FAULT: 8,
  INIT: 9,
  RUNNING: 10,
  ALARM: 11,
  DISABLE: 12,
  UNKNOWN: 13
})

/**
 * @type {Object}
 * @public
 */
export const DispLevel = Enum({
  OPERATOR: 0,
  EXPERT: 1,
  DL_UNKNOWN: 2
})

/**
 * @type {Object}
 * @public
 */
export const ErrSeverity = Enum({
  WARN: 0,
  ERR: 1,
  PANIC: 2
})

/**
 * @type {Object}
 * @public
 */
export const LockerLanguage = Enum({
  CPP: 0,
  JAVA: 1
})

/**
 * @type {Object}
 * @public
 */
export const PipeWriteType = Enum({
  PIPE_READ: 0,
  PIPE_READ_WRITE: 1,
  PIPE_WT_UNKNOWN: 2
})

/**
 * @typedef {boolean[]|number[]|string[]|DevState[]|DevState|DevEncoded[]|boolean} AttrValUnion
 */

/**
 * @typedef {number|JavaClntIdent} ClntIdent
 */

/**
 * @public
 */
export class ArchiveEventProp {

  /** @param {Object} data */
  constructor(data = {}) {
    /** @private */
    this._data = Object.assign({}, data)
  }

  /** @type {string} */
  get rel_change() {
    return this._data.rel_change
  }

  /** @type {string} */
  get abs_change() {
    return this._data.abs_change
  }

  /** @type {string} */
  get period() {
    return this._data.period
  }

  /** @type {string[]} */
  get extensions() {
    return this._data.extensions
  }
}

/**
 * @public
 */
export class AttDataReady {

  /** @param {Object} data */
  constructor(data = {}) {
    /** @private */
    this._data = Object.assign({}, data)
  }

  /** @type {string} */
  get name() {
    return this._data.name
  }

  /** @type {number} */
  get data_type() {
    return this._data.data_type
  }

  /** @type {number} */
  get ctr() {
    return this._data.ctr
  }
}

/**
 * @public
 */
export class AttributeAlarm {

  /** @param {Object} data */
  constructor(data = {}) {
    /** @private */
    this._data = Object.assign({}, data)
  }

  /** @type {string} */
  get min_alarm() {
    return this._data.min_alarm
  }

  /** @type {string} */
  get max_alarm() {
    return this._data.max_alarm
  }

  /** @type {string} */
  get min_warning() {
    return this._data.min_warning
  }

  /** @type {string} */
  get max_warning() {
    return this._data.max_warning
  }

  /** @type {string} */
  get delta_t() {
    return this._data.delta_t
  }

  /** @type {string} */
  get delta_val() {
    return this._data.delta_val
  }

  /** @type {string[]} */
  get extensions() {
    return this._data.extensions
  }
}

/**
 * @public
 */
export class AttributeConfig {

  /** @param {Object} data */
  constructor(data = {}) {
    /** @private */
    this._data = Object.assign({}, data)
  }

  /** @type {string} */
  get name() {
    return this._data.name
  }

  /** @type {AttrWriteType} */
  get writable() {
    return this._data.writable
  }

  /** @type {AttrDataFormat} */
  get data_format() {
    return this._data.data_format
  }

  /** @type {number} */
  get data_type() {
    return this._data.data_type
  }

  /** @type {number} */
  get max_dim_x() {
    return this._data.max_dim_x
  }

  /** @type {number} */
  get max_dim_y() {
    return this._data.max_dim_y
  }

  /** @type {string} */
  get description() {
    return this._data.description
  }

  /** @type {string} */
  get label() {
    return this._data.label
  }

  /** @type {string} */
  get unit() {
    return this._data.unit
  }

  /** @type {string} */
  get standard_unit() {
    return this._data.standard_unit
  }

  /** @type {string} */
  get display_unit() {
    return this._data.display_unit
  }

  /** @type {string} */
  get format() {
    return this._data.format
  }

  /** @type {string} */
  get min_value() {
    return this._data.min_value
  }

  /** @type {string} */
  get max_value() {
    return this._data.max_value
  }

  /** @type {string} */
  get min_alarm() {
    return this._data.min_alarm
  }

  /** @type {string} */
  get max_alarm() {
    return this._data.max_alarm
  }

  /** @type {string} */
  get writable_attr_name() {
    return this._data.writable_attr_name
  }

  /** @type {string[]} */
  get extensions() {
    return this._data.extensions
  }
}

/**
 * @public
 */
export class AttributeConfig_2 {

  /** @param {Object} data */
  constructor(data = {}) {
    /** @private */
    this._data = Object.assign({}, data)
  }

  /** @type {string} */
  get name() {
    return this._data.name
  }

  /** @type {AttrWriteType} */
  get writable() {
    return this._data.writable
  }

  /** @type {AttrDataFormat} */
  get data_format() {
    return this._data.data_format
  }

  /** @type {number} */
  get data_type() {
    return this._data.data_type
  }

  /** @type {number} */
  get max_dim_x() {
    return this._data.max_dim_x
  }

  /** @type {number} */
  get max_dim_y() {
    return this._data.max_dim_y
  }

  /** @type {string} */
  get description() {
    return this._data.description
  }

  /** @type {string} */
  get label() {
    return this._data.label
  }

  /** @type {string} */
  get unit() {
    return this._data.unit
  }

  /** @type {string} */
  get standard_unit() {
    return this._data.standard_unit
  }

  /** @type {string} */
  get display_unit() {
    return this._data.display_unit
  }

  /** @type {string} */
  get format() {
    return this._data.format
  }

  /** @type {string} */
  get min_value() {
    return this._data.min_value
  }

  /** @type {string} */
  get max_value() {
    return this._data.max_value
  }

  /** @type {string} */
  get min_alarm() {
    return this._data.min_alarm
  }

  /** @type {string} */
  get max_alarm() {
    return this._data.max_alarm
  }

  /** @type {string} */
  get writable_attr_name() {
    return this._data.writable_attr_name
  }

  /** @type {DispLevel} */
  get level() {
    return this._data.level
  }

  /** @type {string[]} */
  get extensions() {
    return this._data.extensions
  }
}

/**
 * @public
 */
export class AttributeConfig_3 {

  /** @param {Object} data */
  constructor(data = {}) {
    /** @private */
    this._data = Object.assign({}, data)
  }

  /** @type {string} */
  get name() {
    return this._data.name
  }

  /** @type {AttrWriteType} */
  get writable() {
    return this._data.writable
  }

  /** @type {AttrDataFormat} */
  get data_format() {
    return this._data.data_format
  }

  /** @type {number} */
  get data_type() {
    return this._data.data_type
  }

  /** @type {number} */
  get max_dim_x() {
    return this._data.max_dim_x
  }

  /** @type {number} */
  get max_dim_y() {
    return this._data.max_dim_y
  }

  /** @type {string} */
  get description() {
    return this._data.description
  }

  /** @type {string} */
  get label() {
    return this._data.label
  }

  /** @type {string} */
  get unit() {
    return this._data.unit
  }

  /** @type {string} */
  get standard_unit() {
    return this._data.standard_unit
  }

  /** @type {string} */
  get display_unit() {
    return this._data.display_unit
  }

  /** @type {string} */
  get format() {
    return this._data.format
  }

  /** @type {string} */
  get min_value() {
    return this._data.min_value
  }

  /** @type {string} */
  get max_value() {
    return this._data.max_value
  }

  /** @type {string} */
  get writable_attr_name() {
    return this._data.writable_attr_name
  }

  /** @type {DispLevel} */
  get level() {
    return this._data.level
  }

  /** @type {AttributeAlarm} */
  get att_alarm() {
    return this._data.att_alarm
  }

  /** @type {EventProperties} */
  get event_prop() {
    return this._data.event_prop
  }

  /** @type {string[]} */
  get extensions() {
    return this._data.extensions
  }

  /** @type {string[]} */
  get sys_extensions() {
    return this._data.sys_extensions
  }
}

/**
 * @public
 */
export class AttributeConfig_5 {

  /** @param {Object} data */
  constructor(data = {}) {
    /** @private */
    this._data = Object.assign({}, data)
  }

  /** @type {string} */
  get name() {
    return this._data.name
  }

  /** @type {AttrWriteType} */
  get writable() {
    return this._data.writable
  }

  /** @type {AttrDataFormat} */
  get data_format() {
    return this._data.data_format
  }

  /** @type {number} */
  get data_type() {
    return this._data.data_type
  }

  /** @type {boolean} */
  get memorized() {
    return this._data.memorized
  }

  /** @type {boolean} */
  get mem_init() {
    return this._data.mem_init
  }

  /** @type {number} */
  get max_dim_x() {
    return this._data.max_dim_x
  }

  /** @type {number} */
  get max_dim_y() {
    return this._data.max_dim_y
  }

  /** @type {string} */
  get description() {
    return this._data.description
  }

  /** @type {string} */
  get label() {
    return this._data.label
  }

  /** @type {string} */
  get unit() {
    return this._data.unit
  }

  /** @type {string} */
  get standard_unit() {
    return this._data.standard_unit
  }

  /** @type {string} */
  get display_unit() {
    return this._data.display_unit
  }

  /** @type {string} */
  get format() {
    return this._data.format
  }

  /** @type {string} */
  get min_value() {
    return this._data.min_value
  }

  /** @type {string} */
  get max_value() {
    return this._data.max_value
  }

  /** @type {string} */
  get writable_attr_name() {
    return this._data.writable_attr_name
  }

  /** @type {DispLevel} */
  get level() {
    return this._data.level
  }

  /** @type {string} */
  get root_attr_name() {
    return this._data.root_attr_name
  }

  /** @type {string[]} */
  get enum_labels() {
    return this._data.enum_labels
  }

  /** @type {AttributeAlarm} */
  get att_alarm() {
    return this._data.att_alarm
  }

  /** @type {EventProperties} */
  get event_prop() {
    return this._data.event_prop
  }

  /** @type {string[]} */
  get extensions() {
    return this._data.extensions
  }

  /** @type {string[]} */
  get sys_extensions() {
    return this._data.sys_extensions
  }
}

/**
 * @public
 */
export class AttributeDim {

  /** @param {Object} data */
  constructor(data = {}) {
    /** @private */
    this._data = Object.assign({}, data)
  }

  /** @type {number} */
  get dim_x() {
    return this._data.dim_x
  }

  /** @type {number} */
  get dim_y() {
    return this._data.dim_y
  }
}

/**
 * @public
 */
export class AttributeValue {

  /** @param {Object} data */
  constructor(data = {}) {
    /** @private */
    this._data = Object.assign({}, data)
  }

  /** @type {Object} */
  get value() {
    return this._data.value
  }

  /** @type {AttrQuality} */
  get quality() {
    return this._data.quality
  }

  /** @type {TimeVal} */
  get time() {
    return this._data.time
  }

  /** @type {string} */
  get name() {
    return this._data.name
  }

  /** @type {number} */
  get dim_x() {
    return this._data.dim_x
  }

  /** @type {number} */
  get dim_y() {
    return this._data.dim_y
  }
}

/**
 * @public
 */
export class AttributeValue_3 {

  /** @param {Object} data */
  constructor(data = {}) {
    /** @private */
    this._data = Object.assign({}, data)
  }

  /** @type {Object} */
  get value() {
    return this._data.value
  }

  /** @type {AttrQuality} */
  get quality() {
    return this._data.quality
  }

  /** @type {TimeVal} */
  get time() {
    return this._data.time
  }

  /** @type {string} */
  get name() {
    return this._data.name
  }

  /** @type {AttributeDim} */
  get r_dim() {
    return this._data.r_dim
  }

  /** @type {AttributeDim} */
  get w_dim() {
    return this._data.w_dim
  }

  /** @type {DevError[]} */
  get err_list() {
    return this._data.err_list
  }
}

/**
 * @public
 */
export class AttributeValue_4 {

  /** @param {Object} data */
  constructor(data = {}) {
    /** @private */
    this._data = Object.assign({}, data)
  }

  /** @type {AttrValUnion} */
  get value() {
    return this._data.value
  }

  /** @type {AttrQuality} */
  get quality() {
    return this._data.quality
  }

  /** @type {AttrDataFormat} */
  get data_format() {
    return this._data.data_format
  }

  /** @type {TimeVal} */
  get time() {
    return this._data.time
  }

  /** @type {string} */
  get name() {
    return this._data.name
  }

  /** @type {AttributeDim} */
  get r_dim() {
    return this._data.r_dim
  }

  /** @type {AttributeDim} */
  get w_dim() {
    return this._data.w_dim
  }

  /** @type {DevError[]} */
  get err_list() {
    return this._data.err_list
  }
}

/**
 * @public
 */
export class AttributeValue_5 {

  /** @param {Object} data */
  constructor(data = {}) {
    /** @private */
    this._data = Object.assign({}, data)
  }

  /** @type {AttrValUnion} */
  get value() {
    return this._data.value
  }

  /** @type {AttrQuality} */
  get quality() {
    return this._data.quality
  }

  /** @type {AttrDataFormat} */
  get data_format() {
    return this._data.data_format
  }

  /** @type {number} */
  get data_type() {
    return this._data.data_type
  }

  /** @type {TimeVal} */
  get time() {
    return this._data.time
  }

  /** @type {string} */
  get name() {
    return this._data.name
  }

  /** @type {AttributeDim} */
  get r_dim() {
    return this._data.r_dim
  }

  /** @type {AttributeDim} */
  get w_dim() {
    return this._data.w_dim
  }

  /** @type {DevError[]} */
  get err_list() {
    return this._data.err_list
  }
}

/**
 * @public
 */
export class ChangeEventProp {

  /** @param {Object} data */
  constructor(data = {}) {
    /** @private */
    this._data = Object.assign({}, data)
  }

  /** @type {string} */
  get rel_change() {
    return this._data.rel_change
  }

  /** @type {string} */
  get abs_change() {
    return this._data.abs_change
  }

  /** @type {string[]} */
  get extensions() {
    return this._data.extensions
  }
}

/**
 * @public
 */
export class DevAttrHistory {

  /** @param {Object} data */
  constructor(data = {}) {
    /** @private */
    this._data = Object.assign({}, data)
  }

  /** @type {boolean} */
  get attr_failed() {
    return this._data.attr_failed
  }

  /** @type {AttributeValue} */
  get value() {
    return this._data.value
  }

  /** @type {DevError[]} */
  get errors() {
    return this._data.errors
  }
}

/**
 * @public
 */
export class DevAttrHistory_3 {

  /** @param {Object} data */
  constructor(data = {}) {
    /** @private */
    this._data = Object.assign({}, data)
  }

  /** @type {boolean} */
  get attr_failed() {
    return this._data.attr_failed
  }

  /** @type {AttributeValue_3} */
  get value() {
    return this._data.value
  }
}

/**
 * @public
 */
export class DevAttrHistory_4 {

  /** @param {Object} data */
  constructor(data = {}) {
    /** @private */
    this._data = Object.assign({}, data)
  }

  /** @type {string} */
  get name() {
    return this._data.name
  }

  /** @type {TimeVal[]} */
  get dates() {
    return this._data.dates
  }

  /** @type {Object} */
  get value() {
    return this._data.value
  }

  /** @type {AttrQuality[]} */
  get quals() {
    return this._data.quals
  }

  /** @type {EltInArray[]} */
  get quals_array() {
    return this._data.quals_array
  }

  /** @type {AttributeDim[]} */
  get r_dims() {
    return this._data.r_dims
  }

  /** @type {EltInArray[]} */
  get r_dims_array() {
    return this._data.r_dims_array
  }

  /** @type {AttributeDim[]} */
  get w_dims() {
    return this._data.w_dims
  }

  /** @type {EltInArray[]} */
  get w_dims_array() {
    return this._data.w_dims_array
  }

  /** @type {DevError[][]} */
  get errors() {
    return this._data.errors
  }

  /** @type {EltInArray[]} */
  get errors_array() {
    return this._data.errors_array
  }
}

/**
 * @public
 */
export class DevAttrHistory_5 {

  /** @param {Object} data */
  constructor(data = {}) {
    /** @private */
    this._data = Object.assign({}, data)
  }

  /** @type {string} */
  get name() {
    return this._data.name
  }

  /** @type {AttrDataFormat} */
  get data_format() {
    return this._data.data_format
  }

  /** @type {number} */
  get data_type() {
    return this._data.data_type
  }

  /** @type {TimeVal[]} */
  get dates() {
    return this._data.dates
  }

  /** @type {Object} */
  get value() {
    return this._data.value
  }

  /** @type {AttrQuality[]} */
  get quals() {
    return this._data.quals
  }

  /** @type {EltInArray[]} */
  get quals_array() {
    return this._data.quals_array
  }

  /** @type {AttributeDim[]} */
  get r_dims() {
    return this._data.r_dims
  }

  /** @type {EltInArray[]} */
  get r_dims_array() {
    return this._data.r_dims_array
  }

  /** @type {AttributeDim[]} */
  get w_dims() {
    return this._data.w_dims
  }

  /** @type {EltInArray[]} */
  get w_dims_array() {
    return this._data.w_dims_array
  }

  /** @type {DevError[][]} */
  get errors() {
    return this._data.errors
  }

  /** @type {EltInArray[]} */
  get errors_array() {
    return this._data.errors_array
  }
}

/**
 * @public
 */
export class DevCmdHistory {

  /** @param {Object} data */
  constructor(data = {}) {
    /** @private */
    this._data = Object.assign({}, data)
  }

  /** @type {TimeVal} */
  get time() {
    return this._data.time
  }

  /** @type {boolean} */
  get cmd_failed() {
    return this._data.cmd_failed
  }

  /** @type {Object} */
  get value() {
    return this._data.value
  }

  /** @type {DevError[]} */
  get errors() {
    return this._data.errors
  }
}

/**
 * @public
 */
export class DevCmdHistory_4 {

  /** @param {Object} data */
  constructor(data = {}) {
    /** @private */
    this._data = Object.assign({}, data)
  }

  /** @type {TimeVal[]} */
  get dates() {
    return this._data.dates
  }

  /** @type {Object} */
  get value() {
    return this._data.value
  }

  /** @type {AttributeDim[]} */
  get dims() {
    return this._data.dims
  }

  /** @type {EltInArray[]} */
  get dims_array() {
    return this._data.dims_array
  }

  /** @type {DevError[][]} */
  get errors() {
    return this._data.errors
  }

  /** @type {EltInArray[]} */
  get errors_array() {
    return this._data.errors_array
  }

  /** @type {number} */
  get cmd_type() {
    return this._data.cmd_type
  }
}

/**
 * @public
 */
export class DevCmdInfo {

  /** @param {Object} data */
  constructor(data = {}) {
    /** @private */
    this._data = Object.assign({}, data)
  }

  /** @type {string} */
  get cmd_name() {
    return this._data.cmd_name
  }

  /** @type {number} */
  get cmd_tag() {
    return this._data.cmd_tag
  }

  /** @type {number} */
  get in_type() {
    return this._data.in_type
  }

  /** @type {number} */
  get out_type() {
    return this._data.out_type
  }

  /** @type {string} */
  get in_type_desc() {
    return this._data.in_type_desc
  }

  /** @type {string} */
  get out_type_desc() {
    return this._data.out_type_desc
  }
}

/**
 * @public
 */
export class DevCmdInfo_2 {

  /** @param {Object} data */
  constructor(data = {}) {
    /** @private */
    this._data = Object.assign({}, data)
  }

  /** @type {string} */
  get cmd_name() {
    return this._data.cmd_name
  }

  /** @type {DispLevel} */
  get level() {
    return this._data.level
  }

  /** @type {number} */
  get cmd_tag() {
    return this._data.cmd_tag
  }

  /** @type {number} */
  get in_type() {
    return this._data.in_type
  }

  /** @type {number} */
  get out_type() {
    return this._data.out_type
  }

  /** @type {string} */
  get in_type_desc() {
    return this._data.in_type_desc
  }

  /** @type {string} */
  get out_type_desc() {
    return this._data.out_type_desc
  }
}

/**
 * @public
 */
export class DevEncoded {

  /** @param {Object} data */
  constructor(data = {}) {
    /** @private */
    this._data = Object.assign({}, data)
  }

  /** @type {string} */
  get encoded_format() {
    return this._data.encoded_format
  }

  /** @type {number[]} */
  get encoded_data() {
    return this._data.encoded_data
  }
}

/**
 * @public
 */
export class DevError {

  /** @param {Object} data */
  constructor(data = {}) {
    /** @private */
    this._data = Object.assign({}, data)
  }

  /** @type {string} */
  get reason() {
    return this._data.reason
  }

  /** @type {ErrSeverity} */
  get severity() {
    return this._data.severity
  }

  /** @type {string} */
  get desc() {
    return this._data.desc
  }

  /** @type {string} */
  get origin() {
    return this._data.origin
  }
}

/**
 * @public
 */
export class DevFailed {

  /** @param {Object} data */
  constructor(data = {}) {
    /** @private */
    this._data = Object.assign({}, data)
  }

  /** @type {DevError[]} */
  get errors() {
    return this._data.errors
  }
}

/**
 * @public
 */
export class DevInfo {

  /** @param {Object} data */
  constructor(data = {}) {
    /** @private */
    this._data = Object.assign({}, data)
  }

  /** @type {string} */
  get dev_class() {
    return this._data.dev_class
  }

  /** @type {string} */
  get server_id() {
    return this._data.server_id
  }

  /** @type {string} */
  get server_host() {
    return this._data.server_host
  }

  /** @type {number} */
  get server_version() {
    return this._data.server_version
  }

  /** @type {string} */
  get doc_url() {
    return this._data.doc_url
  }
}

/**
 * @public
 */
export class DevInfo_3 {

  /** @param {Object} data */
  constructor(data = {}) {
    /** @private */
    this._data = Object.assign({}, data)
  }

  /** @type {string} */
  get dev_class() {
    return this._data.dev_class
  }

  /** @type {string} */
  get server_id() {
    return this._data.server_id
  }

  /** @type {string} */
  get server_host() {
    return this._data.server_host
  }

  /** @type {number} */
  get server_version() {
    return this._data.server_version
  }

  /** @type {string} */
  get doc_url() {
    return this._data.doc_url
  }

  /** @type {string} */
  get dev_type() {
    return this._data.dev_type
  }
}

/**
 * @public
 */
export class DevIntrChange {

  /** @param {Object} data */
  constructor(data = {}) {
    /** @private */
    this._data = Object.assign({}, data)
  }

  /** @type {boolean} */
  get dev_started() {
    return this._data.dev_started
  }

  /** @type {DevCmdInfo_2[]} */
  get cmds() {
    return this._data.cmds
  }

  /** @type {AttributeConfig_5[]} */
  get atts() {
    return this._data.atts
  }
}

/**
 * @public
 */
export class DevPipeBlob {

  /** @param {Object} data */
  constructor(data = {}) {
    /** @private */
    this._data = Object.assign({}, data)
  }

  /** @type {string} */
  get name() {
    return this._data.name
  }

  /** @type {DevPipeDataElt[]} */
  get blob_data() {
    return this._data.blob_data
  }
}

/**
 * @public
 */
export class DevPipeData {

  /** @param {Object} data */
  constructor(data = {}) {
    /** @private */
    this._data = Object.assign({}, data)
  }

  /** @type {string} */
  get name() {
    return this._data.name
  }

  /** @type {TimeVal} */
  get time() {
    return this._data.time
  }

  /** @type {DevPipeBlob} */
  get data_blob() {
    return this._data.data_blob
  }
}

/**
 * @public
 */
export class DevPipeDataElt {

  /** @param {Object} data */
  constructor(data = {}) {
    /** @private */
    this._data = Object.assign({}, data)
  }

  /** @type {string} */
  get name() {
    return this._data.name
  }

  /** @type {AttrValUnion} */
  get value() {
    return this._data.value
  }

  /** @type {DevPipeDataElt[]} */
  get inner_blob() {
    return this._data.inner_blob
  }

  /** @type {string} */
  get inner_blob_name() {
    return this._data.inner_blob_name
  }
}

/**
 * @public
 */
export class DevVarDoubleStringArray {

  /** @param {Object} data */
  constructor(data = {}) {
    /** @private */
    this._data = Object.assign({}, data)
  }

  /** @type {number[]} */
  get dvalue() {
    return this._data.dvalue
  }

  /** @type {string[]} */
  get svalue() {
    return this._data.svalue
  }
}

/**
 * @public
 */
export class DevVarLongStringArray {

  /** @param {Object} data */
  constructor(data = {}) {
    /** @private */
    this._data = Object.assign({}, data)
  }

  /** @type {number[]} */
  get lvalue() {
    return this._data.lvalue
  }

  /** @type {string[]} */
  get svalue() {
    return this._data.svalue
  }
}

/**
 * @public
 */
export class EltInArray {

  /** @param {Object} data */
  constructor(data = {}) {
    /** @private */
    this._data = Object.assign({}, data)
  }

  /** @type {number} */
  get start() {
    return this._data.start
  }

  /** @type {number} */
  get nb_elt() {
    return this._data.nb_elt
  }
}

/**
 * @public
 */
export class EventProperties {

  /** @param {Object} data */
  constructor(data = {}) {
    /** @private */
    this._data = Object.assign({}, data)
  }

  /** @type {ChangeEventProp} */
  get ch_event() {
    return this._data.ch_event
  }

  /** @type {PeriodicEventProp} */
  get per_event() {
    return this._data.per_event
  }

  /** @type {ArchiveEventProp} */
  get arch_event() {
    return this._data.arch_event
  }
}

/**
 * @public
 */
export class JavaClntIdent {

  /** @param {Object} data */
  constructor(data = {}) {
    /** @private */
    this._data = Object.assign({}, data)
  }

  /** @type {string} */
  get MainClass() {
    return this._data.MainClass
  }

  /** @type {number[]} */
  get uuid() {
    return this._data.uuid
  }
}

/**
 * @public
 */
export class MultiDevFailed {

  /** @param {Object} data */
  constructor(data = {}) {
    /** @private */
    this._data = Object.assign({}, data)
  }

  /** @type {NamedDevError[]} */
  get errors() {
    return this._data.errors
  }
}

/**
 * @public
 */
export class NamedDevError {

  /** @param {Object} data */
  constructor(data = {}) {
    /** @private */
    this._data = Object.assign({}, data)
  }

  /** @type {string} */
  get name() {
    return this._data.name
  }

  /** @type {number} */
  get index_in_call() {
    return this._data.index_in_call
  }

  /** @type {DevError[]} */
  get err_list() {
    return this._data.err_list
  }
}

/**
 * @public
 */
export class PeriodicEventProp {

  /** @param {Object} data */
  constructor(data = {}) {
    /** @private */
    this._data = Object.assign({}, data)
  }

  /** @type {string} */
  get period() {
    return this._data.period
  }

  /** @type {string[]} */
  get extensions() {
    return this._data.extensions
  }
}

/**
 * @public
 */
export class PipeConfig {

  /** @param {Object} data */
  constructor(data = {}) {
    /** @private */
    this._data = Object.assign({}, data)
  }

  /** @type {string} */
  get name() {
    return this._data.name
  }

  /** @type {string} */
  get description() {
    return this._data.description
  }

  /** @type {string} */
  get label() {
    return this._data.label
  }

  /** @type {DispLevel} */
  get level() {
    return this._data.level
  }

  /** @type {PipeWriteType} */
  get writable() {
    return this._data.writable
  }

  /** @type {string[]} */
  get extensions() {
    return this._data.extensions
  }
}

/**
 * @public
 */
export class TimeVal {

  /** @param {Object} data */
  constructor(data = {}) {
    /** @private */
    this._data = Object.assign({}, data)
  }

  /** @type {number} */
  get tv_sec() {
    return this._data.tv_sec
  }

  /** @type {number} */
  get tv_usec() {
    return this._data.tv_usec
  }

  /** @type {number} */
  get tv_nsec() {
    return this._data.tv_nsec
  }
}

/**
 * @public
 */
export class ZmqCallInfo {

  /** @param {Object} data */
  constructor(data = {}) {
    /** @private */
    this._data = Object.assign({}, data)
  }

  /** @type {number} */
  get version() {
    return this._data.version
  }

  /** @type {number} */
  get ctr() {
    return this._data.ctr
  }

  /** @type {string} */
  get method_name() {
    return this._data.method_name
  }

  /** @type {number[]} */
  get oid() {
    return this._data.oid
  }

  /** @type {boolean} */
  get call_is_except() {
    return this._data.call_is_except
  }
}

/**
 * @interface
 * @public
 */
export class Device {

  /**
   * @return {string}
   *
   */
  _get_adm_name() { }

  /**
   * @return {string}
   *
   */
  _get_description() { }

  /**
   * @return {string}
   *
   */
  _get_name() { }

  /**
   * @return {DevState}
   *
   */
  _get_state() { }

  /**
   * @return {string}
   *
   */
  _get_status() { }

  /**
   * @return {undefined}
   * @param {string} adm_name adm_name
   */
  _set_adm_name(adm_name) { }

  /**
   * @return {undefined}
   * @param {string} description description
   */
  _set_description(description) { }

  /**
   * @return {undefined}
   * @param {string} name name
   */
  _set_name(name) { }

  /**
   * @return {undefined}
   * @param {DevState} state state
   */
  _set_state(state) { }

  /**
   * @return {undefined}
   * @param {string} status status
   */
  _set_status(status) { }

  /**
   * @return {string[]}
   * @param {number} n n
   */
  black_box(n) { }

  /**
   * @return {Object}
   * @param {string} command command
   * @param {Object} argin argin
   */
  command_inout(command, argin) { }

  /**
   * @return {DevCmdInfo[]}
   *
   */
  command_list_query() { }

  /**
   * @return {DevCmdInfo}
   * @param {string} command command
   */
  command_query(command) { }

  /**
   * @return {AttributeConfig[]}
   * @param {string[]} names names
   */
  get_attribute_config(names) { }

  /**
   * @return {DevInfo}
   *
   */
  info() { }

  /**
   * @return {undefined}
   *
   */
  ping() { }

  /**
   * @return {AttributeValue[]}
   * @param {string[]} names names
   */
  read_attributes(names) { }

  /**
   * @return {undefined}
   * @param {AttributeConfig[]} new_conf new_conf
   */
  set_attribute_config(new_conf) { }

  /**
   * @return {undefined}
   * @param {AttributeValue[]} values values
   */
  write_attributes(values) { }
}

/**
 * @interface
 * @public
 */
export class Device_2 extends Device {

  /**
   * @return {Object}
   * @param {string} command command
   * @param {Object} argin argin
   * @param {DevSource} source source
   */
  command_inout_2(command, argin, source) { }

  /**
   * @return {DevCmdHistory[]}
   * @param {string} command command
   * @param {number} n n
   */
  command_inout_history_2(command, n) { }

  /**
   * @return {DevCmdInfo_2[]}
   *
   */
  command_list_query_2() { }

  /**
   * @return {DevCmdInfo_2}
   * @param {string} command command
   */
  command_query_2(command) { }

  /**
   * @return {AttributeConfig_2[]}
   * @param {string[]} names names
   */
  get_attribute_config_2(names) { }

  /**
   * @return {DevAttrHistory[]}
   * @param {string} name name
   * @param {number} n n
   */
  read_attribute_history_2(name, n) { }

  /**
   * @return {AttributeValue[]}
   * @param {string[]} names names
   * @param {DevSource} source source
   */
  read_attributes_2(names, source) { }
}

/**
 * @interface
 * @public
 */
export class Device_3 extends Device_2 {

  /**
   * @return {AttributeConfig_3[]}
   * @param {string[]} names names
   */
  get_attribute_config_3(names) { }

  /**
   * @return {DevInfo_3}
   *
   */
  info_3() { }

  /**
   * @return {DevAttrHistory_3[]}
   * @param {string} name name
   * @param {number} n n
   */
  read_attribute_history_3(name, n) { }

  /**
   * @return {AttributeValue_3[]}
   * @param {string[]} names names
   * @param {DevSource} source source
   */
  read_attributes_3(names, source) { }

  /**
   * @return {undefined}
   * @param {AttributeConfig_3[]} new_conf new_conf
   */
  set_attribute_config_3(new_conf) { }

  /**
   * @return {undefined}
   * @param {AttributeValue[]} values values
   */
  write_attributes_3(values) { }
}

/**
 * @interface
 * @public
 */
export class Device_4 extends Device_3 {

  /**
   * @return {Object}
   * @param {string} command command
   * @param {Object} argin argin
   * @param {DevSource} source source
   * @param {ClntIdent} cl_ident cl_ident
   */
  command_inout_4(command, argin, source, cl_ident) { }

  /**
   * @return {DevCmdHistory_4}
   * @param {string} command command
   * @param {number} n n
   */
  command_inout_history_4(command, n) { }

  /**
   * @return {DevAttrHistory_4}
   * @param {string} name name
   * @param {number} n n
   */
  read_attribute_history_4(name, n) { }

  /**
   * @return {AttributeValue_4[]}
   * @param {string[]} names names
   * @param {DevSource} source source
   * @param {ClntIdent} cl_ident cl_ident
   */
  read_attributes_4(names, source, cl_ident) { }

  /**
   * @return {undefined}
   * @param {AttributeConfig_3[]} new_conf new_conf
   * @param {ClntIdent} cl_ident cl_ident
   */
  set_attribute_config_4(new_conf, cl_ident) { }

  /**
   * @return {undefined}
   * @param {AttributeValue_4[]} values values
   * @param {ClntIdent} cl_ident cl_ident
   */
  write_attributes_4(values, cl_ident) { }

  /**
   * @return {AttributeValue_4[]}
   * @param {AttributeValue_4[]} values values
   * @param {ClntIdent} cl_ident cl_ident
   */
  write_read_attributes_4(values, cl_ident) { }
}

/**
 * @interface
 * @public
 */
export class Device_5 extends Device_4 {

  /**
   * @return {AttributeConfig_5[]}
   * @param {string[]} names names
   */
  get_attribute_config_5(names) { }

  /**
   * @return {PipeConfig[]}
   * @param {string[]} names names
   */
  get_pipe_config_5(names) { }

  /**
   * @return {DevAttrHistory_5}
   * @param {string} name name
   * @param {number} n n
   */
  read_attribute_history_5(name, n) { }

  /**
   * @return {AttributeValue_5[]}
   * @param {string[]} names names
   * @param {DevSource} source source
   * @param {ClntIdent} cl_ident cl_ident
   */
  read_attributes_5(names, source, cl_ident) { }

  /**
   * @return {DevPipeData}
   * @param {string} name name
   * @param {ClntIdent} cl_ident cl_ident
   */
  read_pipe_5(name, cl_ident) { }

  /**
   * @return {undefined}
   * @param {AttributeConfig_5[]} new_conf new_conf
   * @param {ClntIdent} cl_ident cl_ident
   */
  set_attribute_config_5(new_conf, cl_ident) { }

  /**
   * @return {undefined}
   * @param {PipeConfig[]} new_conf new_conf
   * @param {ClntIdent} cl_ident cl_ident
   */
  set_pipe_config_5(new_conf, cl_ident) { }

  /**
   * @return {undefined}
   * @param {DevPipeData} value value
   * @param {ClntIdent} cl_ident cl_ident
   */
  write_pipe_5(value, cl_ident) { }

  /**
   * @return {AttributeValue_5[]}
   * @param {AttributeValue_4[]} values values
   * @param {string[]} r_names r_names
   * @param {ClntIdent} cl_ident cl_ident
   */
  write_read_attributes_5(values, r_names, cl_ident) { }

  /**
   * @return {DevPipeData}
   * @param {DevPipeData} value value
   * @param {ClntIdent} cl_ident cl_ident
   */
  write_read_pipe_5(value, cl_ident) { }
}

