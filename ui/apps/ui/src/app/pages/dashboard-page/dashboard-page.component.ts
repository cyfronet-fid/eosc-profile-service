import { Component, ViewEncapsulation } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'ui-dashboard',
  template: `
    <div id="background">
      <!--ui-searchbar-with-logo></ui-searchbar-with-logo-->
      <!--ui-eosc-header class="eosc-header-row"></ui-eosc-header-->
      <!--div class="dashboard-carousel">
        <ui-eosc-community-widget></ui-eosc-community-widget>
      </div-->
      <div>
        <div class="row gx-0">
          <div class="col-2 pb-4" style="padding-right: 20px">
            <div class="mb-3">
              <ui-widget-user-profile></ui-widget-user-profile>
            </div>
          </div>
          <div class="col-7 ps-1 pe-4 pt-3 pb-4">
            <div class="rounded widget mb-3">
              <ui-project-widget></ui-project-widget>
            </div>
            <div class="rounded widget" id="container">
              <ui-recommendations-widget></ui-recommendations-widget>
            </div>
          </div>
          <div class="col-3 pt-3 pb-4" style="padding-right: 20px">
            <div class="mb-3">
              <ui-widget-upcoming-events></ui-widget-upcoming-events>
            </div>
            <div class="mb-3">
              <ui-widget-news></ui-widget-news>
            </div>
            <div class="mb-3">
              <ui-widget-communities></ui-widget-communities>
            </div>
            <div class="mb-3">
              <ui-widget-impact></ui-widget-impact>
            </div>
            <!--div class="mb-3">
              <ui-widget-videos></ui-widget-videos>
            </div-->
            <div class="mb-3">
              <ui-widget-social-media></ui-widget-social-media>
            </div>
            <div class="mb-3">
              <ui-widget-eosc-numbers></ui-widget-eosc-numbers>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      #container {
        height: auto;
      }
      #background {
        background-color: #eef1f3;
      }
      .rounded {
        border-radius: 16px !important;
      }
      .widget {
        background-color: white;
      }
      .paddings {
        padding: 24px;
      }
      .user-profile-padding {
        padding: 24px 10px;
      }
      .widget-header {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 20px;
        color: #1a2128;
      }
      .widget-editable {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 13px;
        line-height: 18px;
        color: #919ba3;
      }
      .widget-editable:hover {
        cursor: pointer;
        color: #3D4DB6;
      }
      .widget-text {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: #1a2128;
      }
      .email-address {
        font-size: 12px;
        line-height: 17px;
        color: #919ba3;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardPageComponent {}
