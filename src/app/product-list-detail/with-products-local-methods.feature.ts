import { HttpErrorResponse } from "@angular/common/http";
import { inject, computed, Signal } from "@angular/core";
import { typedCallConfig, withCalls, withFeatureFactory } from "@ngrx-traits/signals";
import { FeatureConfigFactory } from "@ngrx-traits/signals/lib/with-feature-factory/with-feature-factory.model";
import { SignalStoreFeature, SignalStoreFeatureResult, patchState, signalStoreFeature, withComputed, withMethods, withState } from "@ngrx/signals";
import { ProductService } from "../services/product.service";
import { Product, ProductDetail } from "../models";
import { setEntity } from "@ngrx/signals/entities";

interface WithSelectedEntitySpecificsState {
    state: {};
    computed: {
    };
    methods: {


    };
  }
  
  export function withProductLocalMethod<
    Input extends SignalStoreFeatureResult,
  >(
    configFactory: FeatureConfigFactory<Input, {}>,
  ): SignalStoreFeature<Input, WithSelectedEntitySpecificsState> {
    return withFeatureFactory(() => {
      return signalStoreFeature(

        withComputed((store) => ({
            printName: computed(() => {
                // store is of type any, can't access all property from the global store
                return store.
            })
        })),
         withCalls(
            (store) => ({
              loadProductDetail: typedCallConfig({
                call: (id: string) => inject(ProductService).getProductDetail(id),
                onSuccess: (product?: ProductDetail) => {
                    if(!product) return
                    console.log(product)
                },
                onError: (error: HttpErrorResponse) => {
                  console.log(error)
                },
              }),
            }),
          ),
      )
       
        
    })
  }