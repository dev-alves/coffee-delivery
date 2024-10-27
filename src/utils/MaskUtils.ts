export class MaskUtils {
  private static cep(value: string) {
    return value.length === 8 ? value.replace(/((\d){5})/, '$1' + '-') : value
  }

  static applyMask(maskName: string, value: string) {
    if (maskName === 'cep') {
      return this.cep(value)
    }
    return value
  }
}
