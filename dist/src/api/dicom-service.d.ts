export declare class DicomService {
    parseDicomFile(dicomFileBuffer: Buffer): any;
    extractDicomTags(dataset: any): any;
    jsonToDicom(jsonData: any): any;
}
