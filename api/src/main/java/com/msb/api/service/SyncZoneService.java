package com.msb.api.service;

import java.util.ArrayList;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import com.msb.api.model.req.AddressReq;
import com.msb.api.model.mapper.AddressMapper;

@Service
public class SyncZoneService {
    @Autowired
    private AddressMapper addressMapper;

    @Autowired
    private AsyncZoneService asyncZoneService;

    public void syncZone(int threadSize) {
        ArrayList<AddressReq> addressReqList = getAddressRequestSlice(threadSize);

        for (AddressReq addressReq: addressReqList) {
            asyncZoneService.syncAddresses(addressReq);
        }
    }

    public ArrayList<AddressReq> getAddressRequestSlice(int threadSize) {
        AddressReq addressReq = new AddressReq();

        int totalAddress = addressMapper.getTotalAddress(addressReq);

        ArrayList<AddressReq> requestList = new ArrayList();

        int page = threadSize;
        int pageSize = totalAddress / threadSize;
        int remainder = totalAddress % threadSize;

        for (int i = 1; i <= page; i++) {
            int addressStart = (i - 1) * pageSize;

            AddressReq request = new AddressReq();
            request.setStart(addressStart);
            request.setLimit(pageSize);
            requestList.add(request);
        }

        if(remainder > 0) {
            int addressStart = page * pageSize;

            int limit = totalAddress - addressStart;

            AddressReq request = new AddressReq();
            request.setStart(addressStart);
            request.setLimit(limit);
            requestList.add(request);
        }

        return requestList;
    }
}
