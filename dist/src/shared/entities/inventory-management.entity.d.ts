import { User } from './user.entity';
export declare class InventoryItem {
    id: string;
    sku: string;
    name: string;
    description: string;
    category: string;
    subcategory: string;
    manufacturer: string;
    modelNumber: string;
    partNumber: string;
    unitCost: number;
    sellingPrice: number;
    unit: string;
    currentStock: number;
    minimumStock: number;
    maximumStock: number;
    reorderPoint: number;
    reorderQuantity: number;
    storageLocation: string;
    binLocation: string;
    status: string;
    expirationDate: Date;
    lotNumber: string;
    serialNumber: string;
    specifications: any;
    isControlledSubstance: boolean;
    controlledSubstanceSchedule: string;
    requiresRefrigeration: boolean;
    isHazardous: boolean;
    supplierId: string;
    createdAt: Date;
    updatedAt: Date;
    supplier: Supplier;
    transactions: InventoryTransaction[];
    purchaseOrderItems: PurchaseOrderItem[];
}
export declare class Supplier {
    id: string;
    name: string;
    contactPerson: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    taxId: string;
    status: string;
    paymentTerms: any;
    website: string;
    notes: string;
    createdAt: Date;
    updatedAt: Date;
    items: InventoryItem[];
    purchaseOrders: PurchaseOrder[];
}
export declare class InventoryTransaction {
    id: string;
    itemId: string;
    type: string;
    quantity: number;
    unitCost: number;
    reason: string;
    referenceNumber: string;
    notes: string;
    performedById: string;
    fromLocation: string;
    toLocation: string;
    expirationDate: Date;
    lotNumber: string;
    createdAt: Date;
    item: InventoryItem;
    performedBy: User;
}
export declare class PurchaseOrder {
    id: string;
    orderNumber: string;
    supplierId: string;
    status: string;
    totalAmount: number;
    taxAmount: number;
    shippingAmount: number;
    expectedDeliveryDate: Date;
    deliveryAddress: string;
    notes: string;
    createdById: string;
    approvedById: string;
    approvedAt: Date;
    createdAt: Date;
    updatedAt: Date;
    supplier: Supplier;
    createdBy: User;
    approvedBy: User;
    items: PurchaseOrderItem[];
}
export declare class PurchaseOrderItem {
    id: string;
    purchaseOrderId: string;
    inventoryItemId: string;
    quantity: number;
    unitCost: number;
    totalCost: number;
    receivedQuantity: number;
    status: string;
    notes: string;
    purchaseOrder: PurchaseOrder;
    inventoryItem: InventoryItem;
}
export declare class InventoryLocation {
    id: string;
    name: string;
    description: string;
    type: string;
    building: string;
    floor: string;
    room: string;
    isActive: boolean;
    requiresAuthorization: boolean;
    environmentalControls: any;
    createdAt: Date;
    updatedAt: Date;
}
export declare class StockAlert {
    id: string;
    itemId: string;
    alertType: string;
    severity: string;
    status: string;
    message: string;
    threshold: number;
    currentValue: number;
    expirationDate: Date;
    resolvedAt: Date;
    resolvedById: string;
    createdAt: Date;
    item: InventoryItem;
    resolvedBy: User;
}
