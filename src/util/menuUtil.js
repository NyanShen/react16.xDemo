import  _ from "lodash";

class menuUtil {
    setActiveChildNavItem(menus, item, currentPath) {
        this.clearActiveStatusWithChildItems(menus);
        if (_.isArray(item)) {
            _.forEach(item, function (childItem) {
                childItem.active = childItem.path === currentPath;
            });
        } else {
            item.active = true;
        }
    }

    setActiveNavItem(menus, item, router) {
        if (this.hasChildItem(item)) {
            this.clearParentItemsActiveStatus(menus);
        } else {
            this.clearActiveStatusWithChildItems(menus);
            item.active = true;
            if (!!item.path) {
                router.navigate([item.path]);
            }
        }
    }

    hasChildItem(item) {
        return !!item.childItems && item.childItems.length > 0;
    }

    clearParentItemsActiveStatus(menus) {
        menus.forEach(function (item) {
            item.active = false;
        });
    }

    clearActiveStatusWithChildItems(menus) {
        _.forEach(menus, function (item) {
            item.active = false;
            _.forEach(item.childItems, function (childItem) {
                childItem.active = false;
            });
        });
    }

    openItem(item) {
        if (this.hasChildItem(item)) {
            item.isOpen = !item.isOpen;
        } else {
            item.isOpen = false;
        }
    }

    clearActiveItem(menus, activeItem) {
        _.forEach(menus, function (item) {
            if (!(item.id === activeItem.id)) {
                item.active = false;
            }
            if (this.hasChildItem(item)) {
                this.clearActiveItem(item.childItems, activeItem);
            }
        });
    }
}

export default menuUtil;